import CloseSVG from "@/../public/images/icons/close-modal-icon.svg";

export default function ModalCreate({ close }) {
  return (
    <div className="modal create">
      <div className="modal-backdrop" onClick={close}>
        <div className="close-modal" onClick={close}>
          <CloseSVG stroke="white" width="18" height="18" viewBox="0 0 18 18" />
        </div>
      </div>
      <div className="modal-container">
        <div className="modal-inner">
            
        </div>
      </div>
    </div>
  );
}
