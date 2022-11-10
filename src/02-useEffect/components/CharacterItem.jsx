


export const CharacterItem = ({ name, nickname, img }) => {

  return (
    <div className="character">
        <img src={ img } alt="" />
        <div className="info">
            <p className="m0">{ name }</p>
            <p>{ nickname }</p>
        </div>
    </div>
  )
}
