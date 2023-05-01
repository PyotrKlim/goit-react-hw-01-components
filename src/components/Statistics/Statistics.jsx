// const datas = data[0];

export const Statistics = ({ stats, title }) => {
  console.log({ title });
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
      </ul>
    </section>
  );
};
