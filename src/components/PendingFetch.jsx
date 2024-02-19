import ringsLoader from '../assets/svg/rings.svg'

export function PendingFetch() {
  return (
    <div style={{ width: '100%' }}>
      <img
        src={ringsLoader}
        style={{ margin: 'auto', width: '45px', height: '45px' }}
      />
      <p style={{ textAlign: 'center' }}>Loading...</p>
    </div>
  )
}
