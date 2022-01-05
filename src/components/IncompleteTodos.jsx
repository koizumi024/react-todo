export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickDone, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p class="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div>{todo}</div>
              <button onClick={() => onClickDone(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
