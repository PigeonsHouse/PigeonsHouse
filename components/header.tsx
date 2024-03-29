import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons';
import style from "../styles/components/header.module.css"

function Header() {
  return (
    <div className={style.header}>
      <a href="#">
        <h1 className={style.title}>PigeonsHouse&apos;s Portfolio </h1>
        <h4 className={style.title}>鳩屋敷のお屋敷</h4>
      </a>
      <div className={style.icons}>
        <a href="https://twitter.com/PigeonsHouse" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className={style.ico} size="2x" color="#fff" /></a>
        <a href="https://qiita.com/PigeonsHouse" target="_blank" rel="noreferrer"><img src="/qiita.png" height="32px"></img></a>
        <a href="https://github.com/PigeonsHouse" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={style.ico} size="2x" color="#fff" /></a>
      </div>
    </div>
  )
}

export default Header