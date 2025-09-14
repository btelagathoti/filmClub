import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DEFAULT_THUMB = "https://via.placeholder.com/400x250?text=Audition+Video";

const AuditionVideos = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/getActorById/${actorId}`)
      .then(res => setActor(res.data))
      .catch(() => setActor(null));
  }, [actorId]);

  if (!actor) {
    return <div style={{ textAlign: 'center', marginTop: 60 }}>Loading...</div>;
  }

  // Collect audition videos with labels
  const auditionVideos = Object.entries(actor.auditionVideos || {})
    .filter(([_, url]) => url)
    .map(([rasa, url]) => ({ rasa, url }));

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20, background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>{actor.fullname}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
        {auditionVideos.length === 0 && <div>No audition videos uploaded.</div>}
        {auditionVideos.map((video, idx) => (
          <div key={idx} style={{ width: 250, textAlign: "center", cursor: 'pointer' }}
            onClick={() => setModalVideo(video)}>
            <h4>{video.rasa}</h4>
            <video
              width="230"
              height="180"
              style={{ borderRadius: 8, background: "#eee", cursor: 'pointer' }}
              src={video.url}
              muted
              preload="metadata"
              poster={DEFAULT_THUMB}
              onClick={e => { e.stopPropagation(); setModalVideo(video); }}
            />
          </div>
        ))}
      </div>
      {/* Modal for video playback */}
      {modalVideo && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}
          onClick={() => setModalVideo(null)}
        >
          <div style={{ background: '#fff', borderRadius: 18, padding: 32, position: 'relative', width: '70vw', maxWidth: 900, minWidth: 340, boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }} onClick={e => e.stopPropagation()}>
            <button style={{ position: 'absolute', top: 18, right: 24, fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', color: '#333', fontWeight: 'bold', zIndex: 2 }} onClick={() => setModalVideo(null)}>&#10006;</button>
            <h3 style={{ textAlign: 'center', marginBottom: 18 }}>{modalVideo.rasa}</h3>
            <video
              src={modalVideo.url}
              controls
              autoPlay
              style={{ width: '100%', maxHeight: '70vh', borderRadius: 12, background: '#eee', display: 'block', margin: '0 auto' }}
              poster={DEFAULT_THUMB}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditionVideos; 