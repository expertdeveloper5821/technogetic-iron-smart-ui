import React from 'react';
import { useStore } from '../../store/zustand';

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnclick?: () => void;
  attentionmsg?: any;
};
const Modal = ({ showModal, setShowModal, handleOnclick, attentionmsg }: ModalProps) => {
  const {
    setCameraStatus,
    setManageVeriyStepinital,
    setFetchData,
    setSelectedFile,
    setManageVeriyStepback,
    setUploadedImage,
    setPanVerificationfailed,
    setImg
  } = useStore();
  const handleproceed = () => {
    setShowModal(false);
    handleOnclick?.();
    setCameraStatus(false);
    setManageVeriyStepinital();
    setFetchData(true);
    setManageVeriyStepback();
    setSelectedFile(undefined);
    setUploadedImage(0);
    setPanVerificationfailed(0);
    setImg(null);
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="modal">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="modal_content shadow-lg">
                {/*header*/}
                <button className="modal_close_btn" onClick={() => setShowModal(false)}>
                  <span className="modal_close_btn_spn">×</span>
                </button>
                {/*body*/}
                <div className="modal_attntn">
                  <div className="text-xl font-[500]">Attention!</div>
                  <div className="modal_attntn_msg">{attentionmsg}</div>
                  <div className="mt-6 sm:mt-4">
                    <button className="modal_attn_proc_btn" type="button" onClick={handleproceed}>
                      Yes, Proceed
                    </button>
                    <button
                      className="modal_cancl_btn"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
