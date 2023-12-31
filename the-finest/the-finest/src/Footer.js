import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit"

const Footer = () => {
	return (
		<MDBFooter
			color="blue"
			className="font-small pt-4 mt-4"
			style={{
				backgroundColor: "black",
				position: "absolute",
				bottom: "0",
				width: "100%",
			}}
		>
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="title">Footer content</h5>
						<p>
                                                    
							Here you can use rows and columns here to organize your footer
							content.
							
						</p>
					</MDBCol>
					<MDBCol md="6">
						<h5 className="title">Links</h5>
						<ul>
							<li className="list-unstyled">
								<a href="Davidmaina823123@gmail.com">Contact us</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 2</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="/"> THE FINEST </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}

export default Footer