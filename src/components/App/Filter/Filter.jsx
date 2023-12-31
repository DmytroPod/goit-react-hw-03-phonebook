import css from './Filter.module.css';

function Filter({ filter, changeFilter }) {
  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;
