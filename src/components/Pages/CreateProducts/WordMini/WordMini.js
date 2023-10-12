import {useState} from 'react';
import classNames from 'classnames/bind';
import styles from './WordMini.module.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const cx = classNames.bind(styles);
function WordMini() {
  const [WordMiniHtml, setWordMiniHtml] = useState('');
  function handleChange(html) {
    setWordMiniHtml(html);
  }
  const editorStyle = {
    width: '100%', // Đặt chiều rộng tại đây
    height: '300px', // Đặt chiều cao tại đây
  };

  return (
    <div className={cx('containerQuill')}>
      <ReactQuill
        theme={'snow'}
        onChange={handleChange}
        value={WordMiniHtml}
        modules={WordMini.modules}
        formats={WordMini.formats}
        style={editorStyle}
      />
    </div>
  );
}
WordMini.modules = {
  toolbar: [
    [{header: '1'}, {header: '2'}, {font: []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill WordMini formats
 * See https://quilljs.com/docs/formats/
 */
WordMini.formats = [
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'color',
  'background',
  'script',
  'header',
  'blockquote',
  'code-block',
  'indent',
  'list',
  'direction',
  'align',
  'link',
  'image',
  'video',
  'formula',
];

/*
 * PropType validation
 */

export default WordMini;
