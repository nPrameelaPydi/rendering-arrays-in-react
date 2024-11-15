export default function Learner({ name, bio, scores }) {
  return (
    <div className="learner-card">
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      <ul>
        {scores.map((score, i) => {
          return (
            <li key={name}>
              Date: {score.date}, Score: {score.score}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
