import React, {Component} from "react";
import HerobannerList from "../components/banner/HerobannerList";
import SliderThumb from "../components/SliderThumb";
import ContentList from "../components/content/ContentList";
import ListGenre from "../components/ListGenre";
import HeaderBar from "../components/HeaderBar";
import MenuFixed from "../components/MenuFixed";
import MenuFilter from "../components/MenuFilter";
import MenuTop from "../components/MenuTop";
import {Link} from 'react-router-dom';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {contents: ""};
	}

	componentDidMount() {

		/*
		fetch("https://api.webnovelsapp.com/v5/base/man.html",{method:"GET"})
		.then(res_content=>res_content.json())
		//.then(res_content=>{console.log(res_content)})
		.then(res_content=>{this.setState({contents:res_content})})*/

		this.setState({
			contents: [
				{
					"status": 1,
					"info": "success",
					"data": [
						{
							"Category": "New",
							"NavFlag": "hrxs",
							"Books": [
								{
									"Id": 1265,
									"Name": "New Life In Cultivation Chat Group",
									"Author": "Noodle_Overlord",
									"Img": "New-Life-In-Cultivation-Chat-Group.jpg",
									"Desc": "(Disclaimer: I don't own CCG or any of the characters except my Original!)\r\n　　\r\n　　***Warning***\r\n　　If you're looking slice of life pace and the characters completely the same with no change whatsoever",
									"CName": "Fan-fic",
									"Score": "6.0"
								},
								{
									"Id": 1236,
									"Name": "DOMINATING WITH ONE INTENT -fanfic",
									"Author": "Broughtwaorld",
									"Img": "DOMINATING-WITH-ONE-INTENT--fanfic.jpg",
									"Desc": "The use of time machine allowed Trunks to save the Z-warriors, but nobody knew the implications of time travelling without a God's approval. The change in timeline led the original world to ruins, lea",
									"CName": "Fan-fic",
									"Score": "6.0"
								},
								{
									"Id": 975,
									"Name": "Douluo Dalu - The Story of Sheng Feilong",
									"Author": "Yozuka",
									"Img": "Douluo-Dalu---The-Story-of-Sheng-Feilong.jpg",
									"Desc": "A Douluo Dalu Fanfiction in the timeline of DD3 (The Legend of the Dragon King).\r\n　　\r\n　　\r\n　　\r\n　　Follow Sheng Feilong, a young boy from the Sheng Clan, on his way to become a powerful Soul Master.",
									"CName": "Fan-fic",
									"Score": "6.0"
								},
								{
									"Id": 965,
									"Name": "The Merchant of Death",
									"Author": "Lumpish_Haggard",
									"Img": "The-Merchant-of-Death.jpg",
									"Desc": "A Genius Psychopath from Earth transmigrates into the body of Tony Stark which completely changes the fate of the Multiverse.\r\n　　\r\n　　.\r\n　　\r\n　　.\r\n　　\r\n　　.\r\n　　\r\n　　.\r\n　　\r\n　　This novel will follow both The",
									"CName": "Fan-fic",
									"Score": "6.0"
								},
								{
									"Id": 580,
									"Name": "Kingdom of the Weak",
									"Author": "VicL",
									"Img": "Kingdom-of-the-Weak.jpg",
									"Desc": "Born with a curse of weakness, Remian Vin always had to depend on others to survive. One day, after a close encounter with death, to improve the lives of his loved ones, Remian set out to the Frontier",
									"CName": "Fantasy",
									"Score": "6.0"
								}
							]
						},
						{
							"Category": "Top",
							"NavFlag": "rmlz",
							"Books": [
								{
									"Id": 467,
									"Name": "Ancient Godly Monarch",
									"Author": "Jing Wu Hen",
									"Img": "Ancient-Godly-Monarch.jpg",
									"Desc": "In the Province of the Nine Skies, far above the heavens, there exists Nine Galaxies of Astral Rivers made up of countless constellations interwoven together. For Martial Cultivators, they could form",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 530,
									"Name": "True Martial World",
									"Author": "Cocooned Cow",
									"Img": "True-Martial-World.jpg",
									"Desc": "With the strongest experts from the 33 Skies the Human Emperor, Lin Ming, and his opponent, the Abyssal Demon King, were embroiled in a final battle. In the end, the Human Emperor destroyed the Abyssa",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 332,
									"Name": "Super Gene",
									"Author": "Twelve-Winged Dark Seraphim",
									"Img": "Super-Gene.jpg",
									"Desc": "In the magnificent interstellar era, mankind has finally developed teleport technology, but when trying to teleport, they are not sent to the future, the past, or any land known to men...",
									"CName": "Romantic",
									"Score": "6.0"
								},
								{
									"Id": 357,
									"Name": "Release That Witch",
									"Author": "Er Mu",
									"Img": "Release-That-Witch.jpg",
									"Desc": "Chen Yan travels through time, only to end up becoming an honorable prince in the Middle Ages of Europe. Yet this world was not quite as simple as he thought. Witches with magical powers abound, and f",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 19,
									"Name": "Supreme Uprising",
									"Author": "Jewelcat",
									"Img": "Supreme-Uprising.jpg",
									"Desc": "Violet skies, a world undergoing massive changes, a deficient moon, interlinking voids...\r\n　　\r\n　　When the world experienced a cataclysmic event,the majority of living things ceased to exist. Although",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 447,
									"Name": "King of Gods",
									"Author": "Fast Food Restaurant",
									"Img": "King-of-Gods.jpg",
									"Desc": "His will is tough and he is unwilling to be normal. However, his pathway was destined to be that way, being born in a small sect’s branch.\r\n　　\r\n　　\r\n　　\r\n　　However, one day, his left eye merges with the",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 430,
									"Name": "Reincarnation Of The Strongest Sword God",
									"Author": "Lucky Old Cat",
									"Img": "Reincarnation-Of-The-Strongest-Sword-God.jpg",
									"Desc": "Starting over once more, he has entered this “living game” again in order to control his own fate.\r\n　　\r\n　　\r\n　　\r\n　　This time, he will not be controlled by others.\r\n　　\r\n　　\r\n　　\r\n　　Previously the Level 20",
									"CName": "Game",
									"Score": "6.0"
								}
							]
						},
						{
							"Category": "Recommended",
							"NavFlag": "zbtj",
							"Books": [
								{
									"Id": 329,
									"Name": "Reverend Insanity",
									"Author": "Gu Zhen Ren",
									"Img": "Reverend-Insanity.jpg",
									"Desc": "With his Three Fundamental Views* unrighteous, the demon is reborn.\r\n　　\r\n　　An old dream in the ancient days, a new author with an identical name.\r\n　　\r\n　　An old story about a time traveler who was cons",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 364,
									"Name": "God Emperor",
									"Author": "Flying fish",
									"Img": "God-Emperor.jpg",
									"Desc": "Eight hundred years ago, a legendary man passed away. Zhang Ruochen, the son of Emperor Ming, was killed by his fiancée, Princess Chi Yao. Then, eight hundred years after his death, he came back, only",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 368,
									"Name": "The Strongest System",
									"Author": "Xin Feng",
									"Img": "The-Strongest-System.jpg",
									"Desc": "Yours Truly shall have all of you bow down to me!\r\n　　\r\n　　\r\n　　\r\n　　Arriving in this brand-new world, Lin Fan found himself in possession of a system which allows him to level up indefinitely unbounded b",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 372,
									"Name": "Ultimate Scheming System",
									"Author": "Lord of the Common People",
									"Img": "Ultimate-Scheming-System.jpg",
									"Desc": "I am the best when it comes to taking divergent paths. With just a flip of my hand, I shall take the path less commonly travelled. I search far and wide, only to find myself unbeatable and unrivaled.",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 404,
									"Name": "Castle of Black Iron",
									"Author": "Drunk Tiger",
									"Img": "Castle-of-Black-Iron.jpg",
									"Desc": "After the Catastrophe, every rule in the world was rewritten.\r\n　　\r\n　　In the Age of Black Iron, steel, iron, steam engines and fighting force became the crux in which human beings depended on to surviv",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 428,
									"Name": "God Of Slaughter",
									"Author": "Ni Cang Tian",
									"Img": "God-Of-Slaughter.jpg",
									"Desc": "Growing up parentless, Shi Yan, who was left with a large amount of inheritance money, bore a general disinterest in life.\r\n　　\r\n　　\r\n　　\r\n　　The only times he felt alive was when adrenaline coursed thoro",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 446,
									"Name": "Seeking the Flying Sword Path",
									"Author": "I Eat Tomatoes",
									"Img": "Seeking-the-Flying-Sword-Path.jpg",
									"Desc": "Since time immemorial, demons and cultivators have engaged in an unending battle in a struggle for power. Demons have wreaked havoc, causing millions of humans to suffer—cannibalism, rape, the killing",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 449,
									"Name": "The Strongest Gene",
									"Author": "Minus Ninety Degrees",
									"Img": "The-Strongest-Gene.jpg",
									"Desc": "Chen Feng, of modern earth, had suffered bad luck since birth. After finding the legendary “lucky artifact,” his bad luck peaked and he became the only person killed in an earthquake. By a twist of fa",
									"CName": "Romantic",
									"Score": "6.0"
								},
								{
									"Id": 465,
									"Name": "Gourmet of Another World",
									"Author": "Li Hongtian",
									"Img": "Gourmet-of-Another-World.jpg",
									"Desc": "In a fantasy world where martial artists can split mountains and creeks with a wave of their hand and break rivers with a kick, there exists a little restaurant like this.\r\n　　\r\n　　The restaurant isn't",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 529,
									"Name": "War Sovereign Soaring The Heavens",
									"Author": "Feng Qin Yang",
									"Img": "War-Sovereign-Soaring-The-Heavens.jpg",
									"Desc": "Earth’s top weapon specialist’s soul crossed over to an alternate world, merged with Rebirth Martial Emperor’s memories, cultivating Nine Dragons War Sovereign Technique, sweeping through all oppositi",
									"CName": "Fantasy",
									"Score": "6.0"
								},
								{
									"Id": 541,
									"Name": "The Mech Touch",
									"Author": "Exlor",
									"Img": "The-Mech-Touch.jpg",
									"Desc": "The Age of Mechs has arrived! Unfortunately, Ves Larkinson lacked the genetic aptitude to become a famed mech pilot. Fighting against his fate, he studied mech design in order to express his love for",
									"CName": "Romantic",
									"Score": "6.0"
								},
								{
									"Id": 1254,
									"Name": "Tempest of the Stellar War",
									"Author": "Skeleton Wizard",
									"Img": "Tempest-of-the-Stellar-War.jpg",
									"Desc": "He received a genetic score of 28... completely disqualifying him from applying to military college!\r\n　　\r\n　　He helped deliver a friend's love letter... and fell into a lake becoming infamous for dying",
									"CName": "Historical",
									"Score": "6.0"
								}
							]
						},
						{
							"Category": "Completed",
							"NavFlag": "wbjx",
							"Books": [
								{
									"Id": 1541,
									"Name": "Journey of a Divine Weapon",
									"Author": "The_Paragon",
									"Img": "Journey-of-a-Divine-Weapon.jpg",
									"Desc": "(Rewrite of Journey of Yun Che and his Companion with different options)\r\n　　\r\n　　Jean, a teenager, was a boy who was Always alone, kicked out from his family, dropped out from the school, even random p",
									"CName": "Fan-fic",
									"Score": "6.0"
								},
								{
									"Id": 950,
									"Name": "System: World's Infinity",
									"Author": "Oniichan_Thickskin",
									"Img": "System：-World-s-Infinity.jpg",
									"Desc": "Leonard Lu, a 21 years old Asian Male. He is a shut-in loser in life who is addicted to playing games, reading light novels, manga/manhua/ and manwha 16 hours a day, 7 days a week since he was Freshma",
									"CName": "Fan-fic",
									"Score": "6.0"
								},
								{
									"Id": 708,
									"Name": "Advent of the New Age",
									"Author": "Acedus",
									"Img": "Advent-of-the-New-Age.jpg",
									"Desc": "The magical world of Threa is now experiencing a massive change.\r\n　　A new age is coming.\r\n　　The age of the 'gun' has arrived.\r\n　　Weapons of steel that could kill from a distance. However, they were no",
									"CName": "Historical",
									"Score": "6.0"
								}
							]
						},
						{
							"Category": "Genre",
							"NavFlag": "fldh",
							"Categories": [
								{
									"CategoryName": "Fantasy",
									"CategoryId": 1
								},
								{
									"CategoryName": "Xianxia",
									"CategoryId": 2
								},
								{
									"CategoryName": "Romantic",
									"CategoryId": 3
								}
							]
						}
					]
				}
			]
		});
	}

	render() {
		return (
			<div className="app">
				<HeaderBar />

				<div className="container pl-0 pr-0">
					<div className="row">
						<div className="col-12">
							<MenuTop />
							<HerobannerList />
							<MenuFilter />

							<div className="block-content mb-2">
								<h2 className="font-style-3 mb-3">Recommend</h2>
								<Link to="/category" className="link-more">
									More &gt;
								</Link>
								<SliderThumb contents={this.state.contents} category="Recommended" />
							</div>

							<div className="block-content mb-2">
								<h2 className="font-style-3 mb-3">New</h2>
								<Link to="/category" className="link-more">
									More &gt;
								</Link>
								<ContentList contents={this.state.contents} category="New" highlight="show2hi" />
								<ListGenre contents={this.state.contents} />
							</div>

							<div className="block-content mb-2">
								<h2 className="font-style-3 mb-3">Top</h2>
								<Link to="/category" className="link-more">
									More &gt;
								</Link>
								<ContentList contents={this.state.contents} category="Top" highlight="show1hi" />
							</div>

							<div className="block-content">
								<h2 className="font-style-3 mb-3">Completed</h2>
								<Link to="/category" className="link-more">
									More &gt;
								</Link>
								<ContentList contents={this.state.contents} category="Completed" highlight="" />
							</div>
							
						</div>
					</div>
				</div>

				<MenuFixed />
			</div>
		);
	}
}

export default Home;
