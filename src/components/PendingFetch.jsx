import ringsLoader from "../assets/rings.svg";

export function PendingFetch() {
  return (
    <div style={{ width: "100%" }}>
      <img src={ringsLoader} style={{ margin: "auto" }} alt="Loading" />
      <p style={{ textAlign: "center" }}>Loading...</p>
    </div>
  );
}
