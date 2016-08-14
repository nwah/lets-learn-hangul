import React from 'react';
import { getFacebookShareUrl, getTwitterShareUrl } from '../utils/social';
import Logo from './Logo';

const Credits = () => (
  <div className="credits">
    <Logo />

    <div className="credits__audio">
      <h5>Pronunciations from Forvo</h5>
      <div className="credits__columns">
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8B%AD/" target="_blank">
            닭 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B4%9C%EC%B0%AE%EC%95%84%EC%9A%94/" target="_blank">
            괜찮아요 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%89%EC%95%84/" target="_blank">
            앉아 by noxbill95
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%86%EB%8A%94/" target="_blank">
            없는 by Letitgo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%86%EB%8B%A4/" target="_blank">
            없다 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%89%EB%8B%A4/" target="_blank">
            앉다 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9E%88%EB%8B%A4/" target="_blank">
            있다 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%BD%EB%8B%A4/" target="_blank">
            읽다 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%A0%EB%9E%91/" target="_blank">
            신랑 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%84%EB%A3%8C/" target="_blank">
            완료 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%84%A4%EB%82%A0/" target="_blank">
            설날 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%A8%EB%9D%BC%EC%9D%B8/" target="_blank">
            온라인 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B9%A8%EB%9E%98/" target="_blank">
            빨래 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B9%A8%EB%A6%AC/" target="_blank">
            빨리 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%90%EB%9E%98/" target="_blank">
            원래 by mizasquare
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%AC%EB%A6%AC%EB%B8%8C/" target="_blank">
            올리브 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%8C%EB%9E%8C/" target="_blank">
            알람 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9C%B7%EB%86%80%EC%9D%B4/" target="_blank">
            윷놀이 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%9E%EB%82%98/" target="_blank">
            맞나 by heeroppong
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%9E%EB%8B%88/" target="_blank">
            앞니 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%85%EB%AC%B4/" target="_blank">
            업무 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9E%85%EB%A7%9B/" target="_blank">
            입맛 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%8C%EB%A3%8C/" target="_blank">
            음료 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A0%95%EB%A0%A5/" target="_blank">
            정력 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%9D%EB%AC%BC/" target="_blank">
            식물 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%84%9D%EB%A5%98/" target="_blank">
            석류 by euvin
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A0%95%EB%A6%AC/" target="_blank">
            정리 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%9D%EB%9F%89/" target="_blank">
            식량 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%83%9D%EB%A6%AC/" target="_blank">
            생리 by FlesYm
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A0%81%EB%A6%BD/" target="_blank">
            적립 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%95%EB%AC%BC%EA%B4%80/" target="_blank">
            박물관 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%85%EB%A7%88/" target="_blank">
            악마 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%89%EB%82%B4/" target="_blank">
            막내 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8B%89%EB%84%A4%EC%9E%84/" target="_blank">
            닉네임 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%83%EC%9D%8C/" target="_blank">
            웃음 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%9E%EC%95%84%EC%9A%94/" target="_blank">
            맞아요 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%99%EC%9D%B4/" target="_blank">
            같이 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%B4%EC%9B%83/" target="_blank">
            이웃 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%99%EB%8B%A4/" target="_blank">
            같다 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%BD%83/" target="_blank">
            꽃 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A1%9C%EB%B4%87/" target="_blank">
            로봇 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%9B%EC%B9%A8/" target="_blank">
            받침 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%9E%EB%8B%A4/" target="_blank">
            맞다 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%82%AE%EC%9E%A0/" target="_blank">
            낮잠 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%B7/" target="_blank">
            옷 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%9B/" target="_blank">
            맛 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B9%83/" target="_blank">
            깃 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81/" target="_blank">
            페이스북 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A7%80%EC%9D%92/" target="_blank">
            지읒 by FlesYm
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%B4%EC%9D%91/" target="_blank">
            이응 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%9C%EC%98%B7/" target="_blank">
            시옷 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B9%84%EC%9D%8D/" target="_blank">
            비읍 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%98%EC%9D%93/" target="_blank">
            치읓 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8B%B0%EC%9D%95/" target="_blank">
            티읕 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B0%8C/" target="_blank">
            찌 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%94%A8/" target="_blank">
            씨 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%82%90/" target="_blank">
            삐 by forestc
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%81%BC/" target="_blank">
            끼 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%E3%85%8D/" target="_blank">
            ㅍ by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%82%A4%EC%9D%94/" target="_blank">
            키읔 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%AF%B8%EC%9D%8C/" target="_blank">
            미음 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%9E%88%EC%9D%97/" target="_blank">
            히읗 by FlesYm
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%E3%84%B9/" target="_blank">
            ㄹ by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%94%94%EA%B7%BF/" target="_blank">
            디귿 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%B4/" target="_blank">
            카 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%95%98/" target="_blank">
            하 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%8C/" target="_blank">
            알 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%9D%BC/" target="_blank">
            라 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%97/" target="_blank">
            앗 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%85/" target="_blank">
            악 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8B%88%EC%9D%80/" target="_blank">
            니은 by FlesYm
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%E3%84%B1/" target="_blank">
            ㄱ by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%98/" target="_blank">
            의 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%A8/" target="_blank">
            웨 by jueun
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%B8/" target="_blank">
            외 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9C%84/" target="_blank">
            위 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%8C/" target="_blank">
            워 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%96%98/" target="_blank">
            얘 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9A%94/" target="_blank">
            요 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9C%A0/" target="_blank">
            유 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%AC/" target="_blank">
            여 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9C%BC/" target="_blank">
            으 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%A0/" target="_blank">
            애 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%90/" target="_blank">
            에 by fallight
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%96%B4/" target="_blank">
            어 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%A4/" target="_blank">
            오 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9A%B0/" target="_blank">
            우 by staytuned
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%84/" target="_blank">
            아 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%E1%84%83/" target="_blank">
            ᄃ by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B1%80/" target="_blank">
            뱀 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%9C/" target="_blank">
            개 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%B0/" target="_blank">
            배 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/" target="_blank">
            가위바위보 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%9D%AC%EB%A7%9D/" target="_blank">
            희망 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%98%EB%A6%AC/" target="_blank">
            의리 by asdfjk
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%98%EC%9E%90/" target="_blank">
            의자 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%98%EC%82%AC/" target="_blank">
            의사 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%9A%8C%EC%82%AC/" target="_blank">
            회사 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B4%B4%EB%AC%BC/" target="_blank">
            괴물 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%BC%EC%86%90/" target="_blank">
            왼손 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B7%80/" target="_blank">
            귀 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A5%90/" target="_blank">
            쥐 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%B8%EA%B5%AD%EC%9D%B8/" target="_blank">
            외국인 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9C%84%ED%97%98/" target="_blank">
            위험 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%A8%EB%94%A9%EB%93%9C%EB%A0%88%EC%8A%A4/" target="_blank">
            웨딩드레스 by angelakim27
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%B0%EB%B9%99/" target="_blank">
            웰빙 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%90/" target="_blank">
            원 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%A0%EB%A7%88%EC%9B%8C%EC%9A%94/" target="_blank">
            고마워요 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9B%B9%ED%88%B0/" target="_blank">
            웹툰 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%AD%90/" target="_blank">
            뭐 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%BD%A4/" target="_blank">
            꽤 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%99%A9%EC%86%8C/" target="_blank">
            황소 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%BC%EC%9D%BC/" target="_blank">
            과일 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%80%EC%9D%B8/" target="_blank">
            와인 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%9C/" target="_blank">
            왜 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%99%80/" target="_blank">
            와 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%86%80%EC%9D%B4%ED%84%B0/" target="_blank">
            놀이터 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%88%AC%EB%AA%85/" target="_blank">
            투명 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%86%A0%EC%9A%94%EC%9D%BC/" target="_blank">
            토요일 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%84/" target="_blank">
            이탈리아 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B2%A0%ED%8A%B8%EB%82%A8/" target="_blank">
            베트남 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8B%B0%EB%B9%84/" target="_blank">
            티비 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9E%91%ED%92%88/" target="_blank">
            작품 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8C%94/" target="_blank">
            팔 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%94%BC/" target="_blank">
            피 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8F%AC%EB%8F%84/" target="_blank">
            포도 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8C%8C%EC%A0%84/" target="_blank">
            파전 by Jnhprk
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%8C%8C/" target="_blank">
            파 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%BB%A4%ED%94%BC/" target="_blank">
            커피 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%81%AC%EB%A6%BC/" target="_blank">
            크림 by FlesYm
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%B4%EB%A9%94%EB%9D%BC/" target="_blank">
            카메라 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%BD%94/" target="_blank">
            코 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%B4%EB%9D%BC/" target="_blank">
            카라 by nassol
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%99%8D%EC%BD%A9/" target="_blank">
            홍콩 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A9%95%EC%8B%9C%EC%BD%94/" target="_blank">
            멕시코 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%BA%90%EB%82%98%EB%8B%A4/" target="_blank">
            캐나다 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%96%A8%EB%A6%AC%EB%8B%A4/" target="_blank">
            떨리다 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%94%B0%EB%9D%BC/" target="_blank">
            따라 by mutosica
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%9D%A0/" target="_blank">
            띠 by indielife
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%BD%80%EB%BD%80/" target="_blank">
            뽀뽀 by jueun
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%BD%80%EB%A1%9C%EB%A1%9C/" target="_blank">
            뽀로로 by iceager
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%BA%BC%EC%A0%B8/" target="_blank">
            꺼져 by vinsonKH
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%96%A1%EB%B3%B6%EC%9D%B4/" target="_blank">
            떡볶이 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%A4%EB%B9%A0/" target="_blank">
            오빠 by jueun
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%93%B0%EB%A0%88%EA%B8%B0/" target="_blank">
            쓰레기 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B9%84%EC%8B%B8/" target="_blank">
            비싸 by shano779
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%B8/" target="_blank">
            싸 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%94%A8%EB%A6%84/" target="_blank">
            씨름 by attice
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A7%9C/" target="_blank">
            짜 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A9%94%EC%96%B4/" target="_blank">
            쩔어 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%97%EC%8B%B8/" target="_blank">
            앗싸 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A7%B1/" target="_blank">
            짱 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B5%90%EB%B3%B5/" target="_blank">
            교복 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%95%99%EA%B5%90/" target="_blank">
            학교 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9A%94%EC%A6%98/" target="_blank">
            요즘 by citrusconstellation
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%91%90%EC%9C%A0/" target="_blank">
            두유 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9C%A0%EB%A8%B8/" target="_blank">
            유머 by magicalcicada
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%82%AC%EB%9E%91%ED%95%B4%EC%9A%94/" target="_blank">
            사랑해요 by jueun
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94/" target="_blank">
            안녕하세요 by jueun
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B1%94/" target="_blank">
            걔 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%AC%EC%9E%90%EC%B9%9C%EA%B5%AC/" target="_blank">
            여자친구 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%85%80%EC%84%9D/" target="_blank">
            녀석 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B3%80%EA%B8%B0/" target="_blank">
            변기 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%AC%EC%9E%90/" target="_blank">
            여자 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%97%BC%EC%86%8C/" target="_blank">
            염소 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%96%98%EA%B8%B0/" target="_blank">
            얘기 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%88%EB%85%95/" target="_blank">
            안녕 by binna
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%96%A5%EC%88%98/" target="_blank">
            향수 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%96%91%EB%B3%B5/" target="_blank">
            양복 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%84%EB%9E%80/" target="_blank">
            계란 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%84%EC%86%8D/" target="_blank">
            계속 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%88%EB%AC%B8/" target="_blank">
            예문 by mcdaddy1
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%98%88/" target="_blank">
            예 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%BC/" target="_blank">
            야 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%84%B9%EC%8B%9C/" target="_blank">
            섹시 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%84%B8%EA%B8%B0/" target="_blank">
            세기 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8D%B0%EB%B7%94/" target="_blank">
            데뷔 by Jmee
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%A0%9C%EB%B0%9C/" target="_blank">
            제발 by woodstck
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%84%A4/" target="_blank">
            네 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%9F%B0%EB%8B%9D%EB%A7%A8/" target="_blank">
            런닝맨 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%95%B4/" target="_blank">
            해 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%83%88/" target="_blank">
            새 by hmmlala
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%A4%ED%8C%A8/" target="_blank">
            실패 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8C%80%EB%B0%95/" target="_blank">
            대박 by euvin
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%9D%A0/" target="_blank">
            흠 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%80%EC%8A%B4/" target="_blank">
            가슴 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B0%B8%EA%B8%B0%EB%A6%84/" target="_blank">
            참기름 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B8%80%EC%9E%90/" target="_blank">
            글자 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%95%9C%EA%B8%80/" target="_blank">
            한글 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B8%8C%EB%9D%BC%EC%A7%88/" target="_blank">
            브라질 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%82%A8%EC%9E%90%EC%B9%9C%EA%B5%AC/" target="_blank">
            남자친구 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%82%A8%EC%9E%90/" target="_blank">
            남자 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%80%EC%9E%90/" target="_blank">
            가자 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%98%B8%EC%A3%BC/" target="_blank">
            호주 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%95%9C%EB%B3%B5/" target="_blank">
            한복 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%ED%98%B8%EB%91%90/" target="_blank">
            호두 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%A0%EC%B6%94/" target="_blank">
            고추 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%BC%EB%B3%B8/" target="_blank">
            일본 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8F%85%EC%9D%BC/" target="_blank">
            독일 by macstjo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B6%94%EC%84%9D/" target="_blank">
            추석 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%95%88/" target="_blank">
            안 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%9D%B4/" target="_blank">
            이 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8D%94/" target="_blank">
            더 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B1%B0/" target="_blank">
            거 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%84%9C%EC%9A%B8/" target="_blank">
            서울 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%A0%EB%B0%9C/" target="_blank">
            신발 by jonseok
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%8B%A0/" target="_blank">
            신 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%88%A0/" target="_blank">
            술 by Jmee
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%86%8C/" target="_blank">
            소 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%82%B4/" target="_blank">
            살 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%82%AC/" target="_blank">
            사 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%82%BC/" target="_blank">
            삼 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%82%B0/" target="_blank">
            산 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B6%80%EC%82%B0/" target="_blank">
            부산 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8B%A4/" target="_blank">
            다 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%82%98/" target="_blank">
            나 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%8F%88/" target="_blank">
            돈 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%9C%EA%B5%AC/" target="_blank">
            친구 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%8C%EB%91%90/" target="_blank">
            만두 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%94%EB%9E%8C/" target="_blank">
            바람 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%A0/" target="_blank">
            칠 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%9C/" target="_blank">
            발 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B8%B8/" target="_blank">
            길 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%AF%B8%EA%B5%AD/" target="_blank">
            미국 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B4%84/" target="_blank">
            봄 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%B0/" target="_blank">
            곰 by betenoir
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B3%A0%EA%B8%B0/" target="_blank">
            고기 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B6%88/" target="_blank">
            불 by heechang2
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B6%88%EA%B3%A0%EA%B8%B0/" target="_blank">
            불고기 by Letitgo
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%A7%88/" target="_blank">
            마 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%90/" target="_blank">
            감 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B0%A8/" target="_blank">
            차 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B0%80/" target="_blank">
            가 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%A4/" target="_blank">
            밤 by jonseok
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B9%84/" target="_blank">
            비 by ativ
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B0%95/" target="_blank">
            박 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B9%80%EB%B0%A5/" target="_blank">
            김밥 by fairybel
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EB%B9%84%EB%B9%94%EB%B0%A5/" target="_blank">
            비빔밥 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B9%80/" target="_blank">
            김 by ssoonkimi
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B8%B0/" target="_blank">
            기 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EC%B9%A8/" target="_blank">
            침 by vhfmqh
          </a>
        </div>
        <div className="credit">
          <a href="http://forvo.com/word/%EA%B9%80%EC%B9%98/" target="_blank">
            김치 by ssoonkimi
          </a>
        </div>
      </div>
    </div>

    <div className="credits__images">
      <h5>Photos</h5>
      <div className="credits__columns">
        <div className="credit">
          <a href="https://www.flickr.com/photos/msgfoodblog/6149570148/in/dateposted/" target="_blank">
            Kimchi by Jin Li
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Credits;