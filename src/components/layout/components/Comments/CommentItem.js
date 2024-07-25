import classNames from 'classnames/bind';
import styles from './Comments.module.scss';
import Comments from './Comments';
import {format, formatDate} from 'date-fns';
import {FlagIcon, LikeIcon} from '../../../Icons/Icons';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {useContext, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faClose,
  faEllipsisV,
  faEllipsisVertical,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
// import Popup from '../../Layout/Components/Popup/Popup';
const cx = classNames.bind(styles);
function CommentItem({data, normal, handleSendData}) {
  const [attrComment, setAttComment] = useState([]);
  const [imagesComment, setImagesComment] = useState([]);
  const [commentreplays, setcommentreplays] = useState(null);
  const [stateAction, setstateAction] = useState(false);
  const [stateUpdate, setstateUpdate] = useState(false);
  const [textUpdateComment, settextUpdateComment] = useState();
  const shop = JSON.parse(sessionStorage.getItem('shop'));
  const dt = [1, 2, 3, 4, 5];

  const convertDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = format(date, 'dd/MM/yyyy');
    const formattedTime = format(date, 'HH:mm:ss');
    return `${formattedDate} | ${formattedTime}`;
  };
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
    return formattedDate;
  };
  const idProduct = data.idProduct;
  useEffect(() => {
    fetch(' https://sdvanbao17.id.vn/api/v1/getFullAttribute')
      .then((rs) => rs.json())
      .then((dt) => {
        const attr = [data.size, data.color];
        const filter = dt.filter((i) => attr.includes(i.attribute_value_id));
        setAttComment(filter);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch('https://sdvanbao17.id.vn/api/v1/getCommentReply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idProduct}),
    })
      .then((rs) => rs.json())
      .then((dt) => {
        setcommentreplays(dt);
        const filter = dt.filter((i) => i.idCmReply == data.idComment);
        settextUpdateComment(filter[0].contentComment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const list_url = data.imageComment.split(',');
    setImagesComment(list_url);
  }, [data]);
  const handleDeleteComment = (idComment) => {
    fetch('https://sdvanbao17.id.vn/api/v1/deleteComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idComment}),
    }).then((rs) => {
      if (rs.status == 200) {
        window.location.reload();
      } else {
        alert('Lỗi gì rồi');
      }
    });
  };
  const handleUpdateComment = (idComment) => {
    const idCustomer = null;
    const contentComment = textUpdateComment;
    const timePublic = formatDate(new Date());
    const rate = null;
    const filename = null;
    fetch('https://sdvanbao17.id.vn/api/v1/updateComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idCustomer,
        idProduct,
        contentComment,
        timePublic,
        rate,
        filename,
        idComment,
      }),
    })
      .then((rs) => {
        if (rs.status == 200) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={cx('wrapperItem')}>
      <div className={cx('container')}>
        {normal == false ? (
          <>
            <div className={cx('imageUser')}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4O-jd-HDATEFcN4KJjaeQH-If38062C8nyBrXmxo&s"></img>
            </div>
            <div className={cx('content')}>
              <div className={cx('line')}>
                <hr></hr>
              </div>
              <p className={cx('nameUser')}>
                <span>0385230184</span>
                <p className={cx('timePublic')}>Hôm nay</p>
              </p>
              <span className={cx('status')}>Tạm hài lòng</span>
              <p className={cx('stars')}></p>
              <p className={cx('comment')}>
                Cần đúng với mô tả. Chất lượng cần tốt hơn. Giao hàng cần nhanh
                hơn. Shop cần thân thiện hơn. Nên đóng gói kỹ hơn. shop lừa đảo
              </p>
              <a className={cx('buyrecent')}>
                <div className={cx('imageProd')}>
                  <img src="https://media3.scdn.vn/img4/2023/10_27/trf740hJU8xYr0bFy6oR_simg_b5529c_250x250_maxb.jpg"></img>
                </div>
                <div className={cx('nameProd')}>
                  <span>Dây cáp sạc nhanh</span>
                </div>
              </a>
            </div>
          </>
        ) : (
          <>
            <div className={cx('imageUser')}>
              <img src={data.imageUser}></img>
            </div>
            <div className={cx('Comment')}>
              <div className={cx('infor')}>
                <div className={cx('inforleft')}>
                  <p className={cx('name')}>{data.nameCustomers}</p>
                  <span className={cx('timedatepublic')}>
                    {convertDateTime(data.timePublic)}
                  </span>
                </div>
                <div className={cx('inforright')}>
                  {dt.map((i) => {
                    return (
                      <p
                        className={cx(
                          'starscomment',
                          data.rateCount >= i ? 'active' : '',
                        )}
                      ></p>
                    );
                  })}
                </div>
              </div>
              <div className={cx('contentComment')}>{data.contentComment}</div>

              <div className={cx('commentImage')}>
                {attrComment.map((item) => {
                  return (
                    <div className={cx('tag')} style={{marginRight: '20px'}}>
                      {item.value}
                    </div>
                  );
                })}
                {/* <ul>
                                    {imagesComment.length != 0 ? (
                                        imagesComment.map((img) => {
                                            return (
                                                <li>
                                                    <img className={cx('imageComment')} src={img}></img>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </ul> */}
                <PhotoProvider>
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {imagesComment.map((image, index) => (
                      <PhotoView key={index} src={image}>
                        <img
                          src={image}
                          alt=""
                          style={{
                            width: '8%',
                            margin: '10px',
                            cursor: 'pointer',
                          }}
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>{' '}
              </div>
              <div className={cx('action')}>
                <div></div>
                <div className={cx('icons')}>
                  <FlagIcon className={'icon'} />
                  <div>
                    <LikeIcon className={'icon'} />
                    <span
                      onClick={() => {
                        handleSendData(data.idComment);
                      }}
                    >
                      Trả lời
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {commentreplays != null ? (
        commentreplays.map((item) => {
          if (item.idCmReply == data.idComment) {
            return (
              <div className={cx('reply_comment')}>
                <div className={cx('thumb_shop')}>
                  <img src={shop.imageShop}></img>
                </div>
                <div className={cx('content')}>
                  <div className={cx('name_shop')}>
                    <span>{shop.tenshop}</span>
                    <div className={cx('actions')}>
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        className={cx('icon_action')}
                        onClick={() => {
                          setstateAction(!stateAction);
                        }}
                      />
                      {stateAction == true ? (
                        <ul>
                          <li
                            onClick={() => {
                              setstateUpdate(!stateUpdate);
                              setstateAction(!stateAction);
                            }}
                          >
                            Sửa
                          </li>
                          <li
                            onClick={() => {
                              handleDeleteComment(item.idComment);
                            }}
                          >
                            Xóa
                          </li>
                        </ul>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <span className={cx('timedatepublic')}>
                    {convertDateTime(item.timePublic)}
                  </span>
                  <div className={cx('content_reply')}>
                    {stateUpdate == true ? (
                      <div>
                        <input
                          style={{marginBottom: '12px'}}
                          type="text"
                          value={textUpdateComment}
                          onChange={(e) => {
                            settextUpdateComment(e.target.value);
                          }}
                          onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                              handleUpdateComment(item.idComment);
                            }
                          }}
                        ></input>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'flex-end',
                            gap: '10px',
                          }}
                        >
                          <button
                            onClick={() => {
                              setstateUpdate(!stateUpdate);
                            }}
                          >
                            <span>Hủy</span>
                          </button>
                          <button
                            onClick={() => {
                              handleUpdateComment(item.idComment);
                            }}
                          >
                            <span>Sửa</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <span>{item.contentComment}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <></>
      )}
      {/* {commentreplays != null && commentreplays.idCmReply == data.idComment ? (
        <div className={cx('reply_comment')}>
          <div className={cx('thumb_shop')}>
            <img src={shop.imageShop}></img>
          </div>
          <div className={cx('content')}>
            <div className={cx('name_shop')}>
              <span>{shop.tenshop}</span>
              <div className={cx('actions')}>
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  className={cx('icon_action')}
                  onClick={() => {
                    setstateAction(!stateAction);
                  }}
                />
                {stateAction == true ? (
                  <ul>
                    <li
                      onClick={() => {
                        setstateUpdate(!stateUpdate);
                        setstateAction(!stateAction);
                      }}
                    >
                      Sửa
                    </li>
                    <li
                      onClick={() => {
                        handleDeleteComment(commentreplays.idComment);
                      }}
                    >
                      Xóa
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <span className={cx('timedatepublic')}>
              {convertDateTime(commentreplays.timePublic)}
            </span>
            <div className={cx('content_reply')}>
              {stateUpdate == true ? (
                <div>
                  <input
                    style={{marginBottom: '12px'}}
                    type="text"
                    value={textUpdateComment}
                    onChange={(e) => {
                      settextUpdateComment(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key == 'Enter') {
                        handleUpdateComment(commentreplays.idComment);
                      }
                    }}
                  ></input>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'end',
                      justifyContent: 'flex-end',
                      gap: '10px',
                    }}
                  >
                    <button
                      onClick={() => {
                        setstateUpdate(!stateUpdate);
                      }}
                    >
                      <span>Hủy</span>
                    </button>
                    <button
                      onClick={() => {
                        handleUpdateComment(commentreplays.idComment);
                      }}
                    >
                      <span>Sửa</span>
                    </button>
                  </div>
                </div>
              ) : (
                <span>{commentreplays.contentComment}</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default CommentItem;
