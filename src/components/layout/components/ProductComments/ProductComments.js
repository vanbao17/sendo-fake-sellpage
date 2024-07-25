import classNames from 'classnames/bind';
import styles from './ProductComments.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faClose,
  faPager,
  faPaperPlane,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {useEffect, useRef, useState} from 'react';
import Comments from '../Comments/Comments';
import {format} from 'date-fns';
const cx = classNames.bind(styles);
function ProductComments({idProduct, handleClose, product, handleReloadPage}) {
  const stars = [6, 1, 2, 3, 4, 5];

  const [rateIndex, setRateIndex] = useState(6);
  const [comments, setcomments] = useState([]);
  const [fillterComment, setfillterComment] = useState([]);
  const [total, settotal] = useState(0);
  const [resendIndex, setresendindex] = useState(null);
  const inputValueRef = useRef();

  useEffect(() => {
    fetch('https://sdvanbao17.id.vn/api/v1/getCommentForProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idProduct}),
    })
      .then((rs) => rs.json())
      .then((dt) => {
        setcomments(dt);
        setfillterComment(dt);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    comments.forEach((i) => {
      settotal((e) => e + parseInt(i.rateCount));
    });
  }, [comments]);
  const StarContainer = styled.div`
    position: relative;
    &::before {
      content: '★★★★★';
      display: block;
      -webkit-text-fill-color: transparent;
      background: linear-gradient(
        90deg,
        #ffc600 ${(total / comments.length / 5) * 100}%,
        #e7e8ea 0
      );
      background-clip: text;
      -webkit-background-clip: text;
    }
  `;
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
    return formattedDate;
  };
  const addCommentReply = () => {
    const contentComment = inputValueRef.current.value;
    const timePublic = formatDate(new Date());
    const idCmReply = resendIndex;
    fetch('https://sdvanbao17.id.vn/api/v1/addCommentReply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idProduct, contentComment, timePublic, idCmReply}),
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
  useEffect(() => {
    if (rateIndex == 6) {
      setfillterComment(comments);
    } else {
      const filterRate = comments.filter((cm) => cm.rateCount == rateIndex);
      setfillterComment(filterRate);
    }
  }, [rateIndex]);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <span>Đánh giá sản phẩm</span>
        <div className={cx('icon_close')}>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              handleClose(false);
            }}
          />
        </div>
      </div>
      <div className={cx('product')}>
        <div className={cx('thumb_product')}>
          <img src={product.imageProduct}></img>
        </div>
        <div className={cx('infor_product')}>
          <div className={cx('name_product')}>
            <span>{product.nameProduct}</span>
          </div>
          <div className={cx('price_product')}>
            <span>{product.priceSale.toLocaleString('vi-VN')}đ</span>
            <span>{product.priceDefault.toLocaleString('vi-VN')}đ</span>
          </div>
          <div className={cx('detail_product')}>
            <StarContainer>
              <div></div>
            </StarContainer>

            <div className={cx('blue_text', 'quality_comment')}>
              {comments.length} lượt đánh giá
            </div>
            <div className={cx('blue_text', 'quality_selled')}>
              {product.selledQuality} lượt lượt bán
            </div>
          </div>
        </div>
      </div>
      <div className={cx('filter_star')}>
        {stars.map((star) => {
          return (
            <div
              className={cx('item_filter', star == rateIndex ? 'active' : '')}
              onClick={() => {
                setRateIndex(star);
              }}
            >
              {star == 6 ? (
                <span className={cx('item')}>Tất cả</span>
              ) : (
                <span className={cx('item')}>{star} Sao</span>
              )}
            </div>
          );
        })}
      </div>
      <hr></hr>
      <div className={cx('list_comments')}>
        {comments != undefined ? (
          fillterComment.length != 0 ? (
            <Comments
              data={rateIndex == 6 ? comments : fillterComment}
              handleSendData={(d) => {
                setresendindex(d);
              }}
            />
          ) : (
            <div className={cx('empty_comment')}>
              <img src="https://web-static.scdn.vn/sendo-communication-rating/863edd0-web/media/rating-empty.f56ae9e22805ed6a864d1a540bea0947.svg"></img>
              <p>Sản phẩm chưa có đánh giá.</p>
              <span>
                Chọn mua sản phẩm để là người đầu tiên đánh giá sản phẩm này.
              </span>
            </div>
          )
        ) : (
          <></>
        )}
      </div>
      {resendIndex != null ? (
        <div className={cx('container_input_rep', 'active')}>
          <div>
            <input
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  addCommentReply();
                }
              }}
              ref={inputValueRef}
              type="text"
            ></input>
            <FontAwesomeIcon
              onClick={addCommentReply}
              icon={faPaperPlane}
              className={cx('icon_plane')}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProductComments;
