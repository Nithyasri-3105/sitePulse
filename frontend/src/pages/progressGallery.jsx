import { useNavigate } from "react-router-dom";

function ProgressGallery() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Progress Gallery</h2>
      <p>Construction Site Photos</p>

      <p>Construction Stage 1</p>
      <img src="/conimage.jpg" alt="Construction Stage 1" />

      <p>Construction Stage 2</p>
      <img src="C:\Users\Nithya Sri V\Paddy.webp" alt="Construction Stage 2" />

      <p>Construction Stage 3</p>
      <img src="C:\Users\Nithya Sri V\Constru.jpg" alt="Construction Stage 3" />

      <button onClick={() => navigate("/client/progress")}>Previous</button>
      <button onClick={() => navigate("/client/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/client/budget")}>Next: Budget Overview</button>
    </div>
  );
}

export default ProgressGallery;