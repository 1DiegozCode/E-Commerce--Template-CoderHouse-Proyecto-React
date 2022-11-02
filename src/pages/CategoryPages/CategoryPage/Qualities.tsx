import './_categoryPageStyles.scss'

interface Props {
  qualities: [string, string, string];
}

export default function Qualities({ qualities }: Props) {
  return (
    <div className="qualities-container">
      {qualities.map((message) => (
        <h4 className="qualities-message mx-4 my-2" key={message}>
          {message}
        </h4>
      ))}
    </div>
  );
}
