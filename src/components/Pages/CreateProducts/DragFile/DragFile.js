import classNames from 'classnames/bind';
import styles from './DragFile.module.scss';
import Popup from '../../../layout/components/Popup/Popup';
import {CameraIcon, CloseIcon} from '../../../Icons';
import {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DragFile({
  state,
  title,
  handleUrl,
  handleUrlVid,
  handleUrlProfile,
  multiple = false,
  handleFile,
}) {
  const [dragging, setDragging] = useState(false);
  const [fileupload, setfileUpload] = useState();
  const [filename, setfilename] = useState();
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [file, setfile] = useState([]);
  const fileInputRef = useRef(null);
  const handleFileUpload = (event) => {
    if (multiple == false) {
      const file = event.target.files[0];
      setfile(file);
      setfilename(file.name);
      const formData = new FormData();
      formData.append('file', file);
      setfileUpload(formData);
      setPreviewImages([URL.createObjectURL(file)]);
    } else {
      const files = Array.from(event.target.files);
      setfile(files);
      setSelectedImages(files);
      const formData = new FormData();
      files.forEach((image) => {
        formData.append('images', image);
      });
      setfilename(files.map((i) => i.name));
      setfileUpload(formData);
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(previewUrls);
    }
  };
  const handleClose = () => {
    state(false);
  };
  const handleClickUpload = () => {
    if (filename !== '') {
      if (title == 'video') {
        handleUrlVid({key: 'video', value: filename});
      }
      if (title == 'image') {
        handleUrl({key: 'imageOther', value: filename});
      }
      if (title == 'imagep') {
        handleUrlProfile({key: 'imageProfile', value: filename});
      }
    }
    if (fileupload !== undefined) {
      if (multiple == false) {
        fetch('https://sdvanbao17.id.vn/api/v1/upload_images_product', {
          method: 'POST',
          body: fileupload,
        })
          .then((response) => {
            console.log('File uploaded successfully');
            handleClose();
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
      } else {
        fetch('https://sdvanbao17.id.vn/api/v1/upload_images_product_parent', {
          method: 'POST',
          body: fileupload,
        })
          .then((response) => {
            console.log('File uploaded successfully');
            handleClose();
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
      }
    }
    handleClose();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const setFileValue = (fileInput, file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      fileInput.files = e.target.result;
    };

    reader.readAsDataURL(file);
    console.log(reader);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        console.log('la file anh');
      }
      if (file.type.startsWith('video/')) {
        console.log('la file video');
      }
    }
    setFileValue(fileInputRef, file);
    setDragging(false);
  };
  const handleDeletePreview = (item, index) => {
    const filter = previewImages.filter((i) => i != item);
    const filterSelectedImage = fileupload.filter((_, id) => id != index);
    setPreviewImages(filter);
    setfileUpload(filterSelectedImage);
  };
  return (
    <div className={cx('wrapper_drag_file')}>
      <Popup>
        <form action="" method="post" enctype="multipart/form-data">
          <div className={cx('container_drag_file')}>
            <div className={cx('container_left')}>
              <div className={cx('title')}>
                <span>THƯ MỤC {title.toUpperCase()}</span>
              </div>
              <div className={cx('cate')}>
                <CameraIcon />
                <span>{title !== 'video' ? 'Sản Phẩm' : 'video'}</span>
              </div>
            </div>
            <div
              className={cx(
                'container_right',
                dragging == true ? 'dragging' : '',
              )}
            >
              <div
                className={cx('drag_place')}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className={cx('place_left')}>
                  <img src="https://media3.scdn.vn/img4/2021/06_28/utGRZ41raww5KHEkTK0t.png"></img>
                </div>
                <div className={cx('place_right')}>
                  {title !== 'video' ? (
                    <>
                      <p>Kích thước: từ 500x500 px</p>
                      <p>Dung lượng: tối đa 5MB</p>
                    </>
                  ) : (
                    <p>
                      Độ dài video: 5-60 giây Kích thước: tối đa 500MB, độ phân
                      giải từ 480p trở lên Định dạng: Mp4, mov, wmv, flv, avi,
                      webm, mkv, mpeg, mpg…
                    </p>
                  )}

                  <div className={cx('btn_file')}>
                    <strong>
                      Kéo thả {title !== 'video' ? 'ảnh' : 'video'} vào hoặc{' '}
                    </strong>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      ref={fileInputRef}
                      multiple={multiple}
                    ></input>
                  </div>
                </div>
              </div>
              <div className={cx('list_file')}>
                {previewImages.length != 0 ? (
                  previewImages.map((src, index) => {
                    return (
                      <div className={cx('item_image')}>
                        <img
                          key={index}
                          src={src}
                          alt={`Preview ${index}`}
                          style={{width: '100px', margin: '10px'}}
                        />
                        <div
                          className={cx('icon_container')}
                          onClick={() => {
                            handleDeletePreview(src, index);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faClose}
                            className={cx('icon')}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <div className={cx('action_btn')}>
                <span>
                  Đã chọn <strong>0/9</strong>{' '}
                  {title !== 'video' ? 'ảnh' : 'video'}
                </span>
                <div className={cx('btn')}>
                  <button onClick={handleClose}>
                    <span>Thoát</span>
                  </button>
                  <span onClick={handleClickUpload}>
                    Thêm {title !== 'video' ? 'ảnh' : 'video'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Popup>
    </div>
  );
}

export default DragFile;
