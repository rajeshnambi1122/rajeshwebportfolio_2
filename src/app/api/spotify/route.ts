import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";

export async function GET() {
  try {
    const nowPlayingRes = await getNowPlaying();

    if (nowPlayingRes.status === 200) {
      const song = await nowPlayingRes.json();
      if (song.item) {
        return NextResponse.json({
          isPlaying: song.is_playing,
          title: song.item.name,
          artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
          album: song.item.album.name,
          albumImageUrl: song.item.album.images[0].url,
          songUrl: song.item.external_urls.spotify,
        });
      }
    }

    const recentlyPlayedRes = await getRecentlyPlayed();
    if (recentlyPlayedRes.status === 200) {
      const data = await recentlyPlayedRes.json();
      const song = data.items[0]?.track;

      if (song) {
        return NextResponse.json({
          isPlaying: false,
          title: song.name,
          artist: song.artists.map((_artist: any) => _artist.name).join(", "),
          album: song.album.name,
          albumImageUrl: song.album.images[0].url,
          songUrl: song.external_urls.spotify,
        });
      }
    }

    return NextResponse.json({ isPlaying: false, title: "Not Listening" });
  } catch (error) {
    console.error("Spotify API Error:", error);
    return NextResponse.json({ isPlaying: false, title: "Not Listening" });
  }
}
