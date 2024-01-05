export default function ModalInfo({ close, params }) {
  const { items, header } = params;
  return (
    <div className="modal info">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-container">
        <div className="modal-inner">
          <div className="close-modal" onClick={close}>
            <img src="/images/icons/close-modal-icon.svg" alt="" />
          </div>
          <div className="modal-header">
            <h1>{header}</h1>
          </div>
          <div className="modal-search">
            <input
              id="modalSearchInput"
              className="modal-search-input"
              type="text"
              placeholder="Search"
            />
            {/* <img
              className="search-input-placeholder"
              src="/images/icons/search-icon.svg"
              alt=""
              draggable="false"
            /> */}
          </div>
          <div className="modal-search-list">
            {items.map((item, index) => (
              <SearchItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchItem({ item }) {
  return (
    <div className="modal-search-item">
      <div className="story">
        <img src={item.image || "/images/profile-photo-example.jpg"} alt="" />
      </div>
      <div className="modal-search-item-info">
        <h4>{item.username || "alfarabi_mazhit"}</h4>
        <p>{item.full_name || "Alfarabi Mazhit"}</p>
      </div>
      <div onClick={() => {}} className="button button-bordered bordered-2">
        Remove
      </div>
    </div>
  );
}
