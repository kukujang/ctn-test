import React, {Component} from "react";
import HeaderBar from "../components/HeaderBar";
import MenuFixed from "../components/MenuFixed";

class ViewMain extends Component {
	render() {
		return (
			<div className="app">
				<HeaderBar />
				<div className="container pl-0 pr-0">
					<div className="row">
						<div className="col-12">
              <div className="p-3">
                <h1 className="font-style-1">Page Template</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
						</div>
					</div>
				</div>
				<MenuFixed />
			</div>
		);
	}
}

export default ViewMain;
