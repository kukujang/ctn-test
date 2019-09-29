import React, {Component} from "react";
import HerobannerList from "./components/banner/HerobannerList";
import SliderThumb from "./components/SliderThumb";
import ContentList from "./components/content/ContentList";
import ListGenre from "./components/ListGenre";
import HeaderBar from "./components/HeaderBar";
import MenuFixed from "./components/MenuFixed";
import MenuFilter from "./components/MenuFilter";
import MenuTop from "./components/MenuTop";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {herobanners: ""};
		this.state = {contents: ""};
	}

	componentDidMount() {
		this.setState({
			herobanners: [
				{
					"status": 1,
					"info": "111111",
					"data": [
						{
							"type": "booklist",
							"param": "1",
							"imgurl": "https://down.webnovelsapp.com/shudan/images/1.jpg"
						}
					]
				},
				{
					"status": 1,
					"info": "222222",
					"data": [
						{
							"type": "booklist",
							"param": "1",
							"imgurl": "https://down.webnovelsapp.com/shudan/images/1.jpg"
						}
					]
				},
				{
					"status": 1,
					"info": "333333",
					"data": [
						{
							"type": "booklist",
							"param": "1",
							"imgurl": "https://down.webnovelsapp.com/shudan/images/1.jpg"
						}
					]
				}
			],
			contents: [
				
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
							<HerobannerList herobanners={this.state.herobanners} />
							<MenuFilter />

							<div className="block-content mb-2">
								<h2 className="font-style-3 mb-3">Recommend</h2>
								<a href="." className="link-more">
									More &gt;
								</a>
								<SliderThumb />
							</div>

							<div className="block-content mb-2">
								<h2 className="font-style-3 mb-3">New</h2>
								<a href="." className="link-more">
									More &gt;
								</a>
								<ContentList contents={this.state.contents} highlight="show2hi" />
								<ListGenre />
							</div>

							<div className="block-content mb-2">
								<h2 className="font-style-3 mb-3">Top</h2>
								<a href="." className="link-more">
									More &gt;
								</a>
								<ContentList highlight="show1hi" />
							</div>

							<div className="block-content">
								<h2 className="font-style-3 mb-3">Completed</h2>
								<a href="." className="link-more">
									More &gt;
								</a>
								<ContentList highlight="" />
							</div>
						</div>
					</div>
				</div>

				<MenuFixed />
			</div>
		);
	}
}

export default App;
