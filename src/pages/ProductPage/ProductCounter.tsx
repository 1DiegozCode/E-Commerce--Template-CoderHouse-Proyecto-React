import './_productPageStyles.scss';

interface ModifyCount {
  (): void;
}

interface Props {
  current: number;
  upCount: ModifyCount;
  downCount: ModifyCount;
}

export default function ProductCounter({current, upCount, downCount}: Props) {
  


  return (
    <div className="counter">
      <span className="down" onClick={() => downCount()}>-</span>
      <input type="text" value={current} readOnly />
      <span className="up" onClick={() => upCount()}>+</span>
    </div>
  );
}
