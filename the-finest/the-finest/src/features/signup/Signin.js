import { Form, Container, Row, Col, Alert } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { currentUserAdded } from "./SigninSlice"

function Signin() {
	const dispatch = useDispatch()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	const navigate = useNavigate()
	function handleSignin(e) {
		e.preventDefault()
		fetch("/signin", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((user) => {
					dispatch(currentUserAdded(user))
					setEmail("")
					setPassword("")
					navigate("/")
				})
			} else {
				r.json().then((err) => setErrors(err.errors))
			}
		})
	}
	// console.log(errors)
	return (
		<Container style={{ marginTop: "75px" }}>
			<Row className="justify-content-md-center">
				{errors.map((err) => (
					<Alert variant="danger">{err}</Alert>
				))}
				<Col xs sm={7}>
					<Form onSubmit={handleSignin}>
						<h3>Signin</h3>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>

						<div className="d-grid gap-2">
							<button
								type="submit"
								size="lg"
								className="btn btn-dark btn-lg btn-block"
							>
								Signin
							</button>
						</div>
						<p className="forgot-password text-right">
							Don't have an account? <a href="/signup">create an account</a>
						</p>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default Signin