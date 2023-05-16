
import { PlusOutlined , LoadingOutlined} from '@ant-design/icons';
import { Upload } from 'antd';
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { avatar } from '../Features/authSlice';
import { useSelector } from "react-redux";



const ImageUpload = () => {
  const { activeUser } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
 
  const dispatch = useDispatch();

  const handleFUpload = (file) => {
   dispatch(avatar(file.file))
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
     
      <Upload
      style={{
        width: '100%',
        height:"100%"
      }}
       name="avatar"
       listType="picture-circle"
       className="avatar-uploader"
        customRequest={(file) => handleFUpload(file)}
        showUploadList={false}
      >
        {activeUser.profile_image.resource ? (
          <img
            src={activeUser.profile_image.resource}
            alt="avatar"
            style={{
              width: '100%', height:"100%", borderRadius:"50%"
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};
export default ImageUpload;