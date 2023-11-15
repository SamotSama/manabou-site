import React from 'react';
import NavBar from '../components/NavBar';
import Subscription from '../components/Suscription';
import Footer from '../components/Footer';
import CharacterCard from '../components/CharacterCard'

const Home = () => {
    const hiraganaCharacters = [
      { hiragana: 'あ', katakana: 'ア', romaji: 'a', animationUrl: 'url/a.gif' },
      { hiragana: 'い', katakana: 'イ', romaji: 'i', animationUrl: 'url/i.gif' },
      { hiragana: 'う', katakana: 'ウ', romaji: 'u', animationUrl: 'url/u.gif' },
      { hiragana: 'え', katakana: 'エ', romaji: 'e', animationUrl: 'url/e.gif' },
      { hiragana: 'お', katakana: 'オ', romaji: 'o', animationUrl: 'url/o.gif' },
      { hiragana: 'か', katakana: 'カ', romaji: 'ka', animationUrl: 'url/ka.gif' },
      { hiragana: 'き', katakana: 'キ', romaji: 'ki', animationUrl: 'url/ki.gif' },
      { hiragana: 'く', katakana: 'ク', romaji: 'ku', animationUrl: 'url/ku.gif' },
      { hiragana: 'け', katakana: 'ケ', romaji: 'ke', animationUrl: 'url/ke.gif' },
      { hiragana: 'こ', katakana: 'コ', romaji: 'ko', animationUrl: 'url/ko.gif' },
      { hiragana: 'さ', katakana: 'サ', romaji: 'sa', animationUrl: 'url/sa.gif' },
      { hiragana: 'し', katakana: 'シ', romaji: 'shi', animationUrl: 'url/shi.gif' },
      { hiragana: 'す', katakana: 'ス', romaji: 'su', animationUrl: 'url/su.gif' },
      { hiragana: 'せ', katakana: 'セ', romaji: 'se', animationUrl: 'url/se.gif' },
      { hiragana: 'そ', katakana: 'ソ', romaji: 'so', animationUrl: 'url/so.gif' },
      { hiragana: 'た', katakana: 'タ', romaji: 'ta', animationUrl: 'url/ta.gif' },
      { hiragana: 'ち', katakana: 'チ', romaji: 'chi', animationUrl: 'url/chi.gif' },
      { hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', animationUrl: 'url/tsu.gif' },
      { hiragana: 'て', katakana: 'テ', romaji: 'te', animationUrl: 'url/te.gif' },
      { hiragana: 'と', katakana: 'ト', romaji: 'to', animationUrl: 'url/to.gif' },
      { hiragana: 'な', katakana: 'ナ', romaji: 'na', animationUrl: 'url/na.gif' },
      { hiragana: 'に', katakana: 'ニ', romaji: 'ni', animationUrl: 'url/ni.gif' },
      { hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', animationUrl: 'url/nu.gif' },
      { hiragana: 'ね', katakana: 'ネ', romaji: 'ne', animationUrl: 'url/ne.gif' },
      { hiragana: 'の', katakana: 'ノ', romaji: 'no', animationUrl: 'url/no.gif' },
      { hiragana: 'は', katakana: 'ハ', romaji: 'ha', animationUrl: 'url/ha.gif' },
      { hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', animationUrl: 'url/hi.gif' },
      { hiragana: 'ふ', katakana: 'フ', romaji: 'fu', animationUrl: 'url/fu.gif' },
      { hiragana: 'へ', katakana: 'ヘ', romaji: 'he', animationUrl: 'url/he.gif' },
      { hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', animationUrl: 'url/ho.gif' },
      { hiragana: 'ま', katakana: 'マ', romaji: 'ma', animationUrl: 'url/ma.gif' },
      { hiragana: 'み', katakana: 'ミ', romaji: 'mi', animationUrl: 'url/mi.gif' },
      { hiragana: 'む', katakana: 'ム', romaji: 'mu', animationUrl: 'url/mu.gif' },
      { hiragana: 'め', katakana: 'メ', romaji: 'me', animationUrl: 'url/me.gif' },
      { hiragana: 'も', katakana: 'モ', romaji: 'mo', animationUrl: 'url/mo.gif' },
      { hiragana: 'や', katakana: 'ヤ', romaji: 'ya', animationUrl: 'url/ya.gif' },
      { hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', animationUrl: 'url/yu.gif' },
      { hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', animationUrl: 'url/yo.gif' },
      { hiragana: 'ら', katakana: 'ラ', romaji: 'ra', animationUrl: 'url/ra.gif' },
      { hiragana: 'り', katakana: 'リ', romaji: 'ri', animationUrl: 'url/ri.gif' },
      { hiragana: 'る', katakana: 'ル', romaji: 'ru', animationUrl: 'url/ru.gif' },
      { hiragana: 'れ', katakana: 'レ', romaji: 're', animationUrl: 'url/re.gif' },
      { hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', animationUrl: 'url/ro.gif' },
      { hiragana: 'わ', katakana: 'ワ', romaji: 'wa', animationUrl: 'url/wa.gif' },
      { hiragana: 'を', katakana: 'ヲ', romaji: 'wo', animationUrl: 'url/wo.gif' },
      { hiragana: 'ん', katakana: 'ン', romaji: 'n', animationUrl: 'url/n.gif' },
    ];
  return (
    <div className='bg-amber-50'>
      <NavBar />
      <h2 id="material" className="text-6xl font-bold mx-auto py-4 text-gray-700 text-center">Hiragana y Katakana</h2>
      <div className="grid grid-cols-5 gap-4 py-4 px-40">
      {hiraganaCharacters.map((character) => (
        <CharacterCard
          key={character.hiragana}
          hiragana={character.hiragana}
          katakana={character.katakana}
          romaji={character.romaji}
        />
      ))}
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;

