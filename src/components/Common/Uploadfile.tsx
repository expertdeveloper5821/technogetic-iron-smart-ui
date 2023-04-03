import React, { useEffect } from 'react';
import { useStore } from '../../store/zustand';
import imageicon from '../../assets/icons/imageicon.svg';

const Uploadfile = () => {
  const {
    uploadedImage,
    setUploadedImage,
    selectedFile,
    setPreview,
    panVerificationfailed,
    setSelectedFile,
    setManageVeriyStep
  } = useStore();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setUploadedImage(uploadedImage + 1);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, panVerificationfailed]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    setManageVeriyStep();
  };
  return (
    <label htmlFor={'upload-button'} className="documentbtn flex w-[4.2rem]">
      <input
        type="file"
        onChange={onSelectFile}
        name="done"
        id="upload-button"
        style={{ display: 'none' }}
      />
      <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
      Browse
    </label>
  );
};

export default Uploadfile;
