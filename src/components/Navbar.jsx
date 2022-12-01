import React, { useState } from 'react';
import ProfileImage from '../images/noNft.jpg';
import MusicImage from '../images/music.png';
import { Link } from 'react-router-dom';
import { ConnectToMetamask } from './utils/functions/connect';
import WalletDropdown from './WalletDropdown';
import { FaWallet } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function NavBar() {
	const [active, setActive] = useState(false);
	const [dropdown, setdropdown] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	const handleConnect = () => {
		ConnectToMetamask();

		//If wallet is connected, handle dropdown toggle
		setdropdown(!dropdown);
	};
	return (
		<>
			<nav className="navbar relative">
				<h1 className="navbar-logo">
					<Link className="navbar-brand mint_beat_Img" to="/">
						<img src={MusicImage} alt="logo" />
						MintBeat
					</Link>{' '}
				</h1>
				<div className="menu-icon flex flex-row">
					<div onClick={handleConnect} className="cursor-pointer mr-5">
						<FaWallet style={{ color: 'white', fontSize: '30px' }} />
					</div>

					<div onClick={handleClick}>
						{active ? (
							<AiOutlineClose style={{ color: 'white', fontSize: '30px' }} />
						) : (
							<AiOutlineMenu style={{ color: 'white', fontSize: '30px' }} />
						)}
					</div>
				</div>

				<div className={active ? 'nav-menu active' : 'nav-menu'} id="nav_menu">
					<form className="d-flex search_input" role="search">
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADCElEQVRoge2ZzUtUURjGn9vCjKRNhLkoQ4MEV22CFn4lQrVp0VKJIBAD/4ekFn38Fy2CaBPpNCpEkG00o5197PpYVJhEGJRa/VrcOzS8c5yZc+fcGaT5wSzOHe7zvM+cOV/3Sk2aZEJUy81Ah6SzkgYk9UrqlLQv+fqbpHeSViQ9kZSPouhTLX7BAQaBHPCL6tkCZoD+Rtcv4Cgw51H8duSB7kaFuAB8DxCiwDowVu8QV8sU9BK4DgwDx4C9yacnuXYDeFXm/ql6hbi2TQFLwJCHzkngaUPCEP+dLBvAOOA94wERMJFoWEazyFAY2HZMfAH6Amj3A2tGex3oClG7NbOz00aIEEX6A8Cm8ciF0i+YDDq6fjyoSexz2eET7McS8WJXzCIpxkQVPhHwzHhNhxLvIF6FixkIIu72GzJeW0B7COFLRnglQL2VPF8bz4u+Grsc1+yvH6ary/PAtAd9BVxBek37ka9oCqyHraEiriCdpv3BVzQF7yvU4A+lq25bzaKVPduM509fDVePWIJPuw5sHVu1CkjSuml3+IqmwHqs+gq4grw17UO+oik4bNqffQVcQey6MeIrmgLr8cJXwBVkwbTP+YqmwHo8rlkROOjYongvUB5+w8ZrA9gfSnzGiC+R3abxufG6HdKgn1Imghn885l0+BwPbZI3BpsEfCZFvOu1B6s7ofSLjbqJj5/FrBFgS098cLNH3VXgQIjaXYZjjq7fJD7ZpX34MOnoCYAFoCWLHAXzKYcpwDJwykNnmNKBbckDrY0IA/Gh6CYwQvxQri359CTXbgFvKgQoZpqMe2aU0jGTFTPA7izDdFH6YMKXP8A9YL6hYZJAfcR/AbsDKMcP4C5wItFoBWYr3JOrNkytL3raJZ1RfMbulXRE8Yue35LWJH2UtCxpUVIuiqKv5v5WSfclnS5j81DS+SiKNmqpNXOAFkq3RJZZspzNQlFlmLlmmHrzP4aZB/Y0utaKUN3UXN/3j2mp0DNXGl2fF9uE2VkhCpgwOzNEgWTMZPOytEmT8vwFxdlvsvNj/B0AAAAASUVORK5CYII="
							alt=""
						/>
						<input
							className="form-control me-2"
							type="search"
							placeholder="Type song, artist or playlist"
							aria-label="Search"
						/>
					</form>
					<div className="collapse justify-content-center " id="navbarNav">
						<ul className="navbar-nav ">
							<li className="nav-item ">
								<Link className="nav-link " to="/">
									Home
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/Browse">
									Browse
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link " to="/mint">
									Mint
								</Link>
							</li>
						</ul>
					</div>
					<div className="collapse navbar-collapse  justify-content-center " id="navbarNav ">
						<ul className="navbar-nav profile_nav_section">
							<li className="nav-item ProfileImage">
								<img src={ProfileImage} alt="" className="profile_nft_image" />
							</li>
							<li className="nav-item ">
								<a className="nav-link " href="/">
									Anna Maria M
								</a>
							</li>{' '}
							<img
								src="data:image /png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEK0lEQVRoge2ZXWxURRTHf7NtRRtIUPSBtCRGozQxMSbFjweIthiVoKQhsXzVAoJE24LG+BmrbJVWkJCoSysxVqIULLURDTZgoEutDyYE3kHjCxZM1OXFplrs7vFhqqX3zt47s3e3mND/093zNf+zZ3bnzLkwjWlc3VD5CCI8XgQX7wGqQCpBVYCaCzJzfJlhkAsgZ0GdAnUCFp5UxDNR146UgPDQPMg0gtQBZY7uQyBdkGlXDAzlyiGnBIQlN8GlbcA64JpcFx/HJZBOUK8r+lOuzs4JCA+uBkkAN7j6hiAFNCr6D7o4WScgVJbA7A5goyszN6g9MLZZMTBmZW1jJDxWCiO9wJJI3OzRB6W1isMjYYahCYx/818xdeT/RR+ka8IqEQuPM7uDqScPsBRi74cZBVZAWLwG6MobpZygViiO92TVZlMIi+cAZ4AbC0HLASlIVygGfjcpg7ZQG1eePMAcKIpnUxorIDxQDkU/Ef2QyhdGQW5VJM97FVkqUNzE/4c8wAxQjSaFLwEhHgNZU3hOzqjXTeNkGCrw3b1A+RQQckUZpCq9QtMWqrIOGa+H7RE6C2f/WLVXUmywWmC9+NZ6/TyrFJoSIGLPpWUtvPHExOdXPrJwEqsK3B4a53LyAA3LYM9zELPsDd9aP5n8yyttKzHfKzAlMDcwRFEM7rjZL9+0FDpf0PogvLMJmg3/EbeVh/sauJk8ZgaGSGdg5Tb49Jhft+5hOPAalJh2JtC2AV6s9ct7B3XMdOgNc5ZXYNHMGZDOwJM7Ye9Rv672fvgiDtdedowoBe82wKur/Pa9g7C6Df62av99MCUwbOWZzsCGXbD7S7/u0fvgUAtcN2OC/LPL/XaffwurWl3I/+EVmGr9C7bXRRHY0q6fm2om6x65G/pa4cfz+vfhxYEk1G+32TZebpNgqICcdYmICGzeDa37/bqqu8zkDw7A2h2u5AF1xisxJKBOO0bVaN4Lb+4Lt+s+AXVvw1g6h0UyPm6mBJI5RNbY+knwgfRZMgJ5MHEzJLDwJPBzjivAjm546UO//OOjmrzztvkP52BReAX0uE8MG9oBO3ug4b2J1qLzCDy1CzIOrYYfXaZRZGEvNA3L4M5bdDLRyGe90ATcias7QD0TZdX8QRKK5BaTJuAkLmkG+a1QlByQAtWSTZk1AcU3F0EZs55iPB009A3shRT93XpWeaUgCUV/b5CFRTN3fRNwKE+MXPA1ZJ4PM3IZ7vYAhr6gIDgMIysU3/8ZZmjVTuspcboG5IPo3MIgCUgvtyEPub3gqAVpJ/9Tu1/RLzgC97wXzhcaPWgtng+0A6Ou/gb8pb/10QpX8ppPBAjVZeMTszpgnqP7OVD7QHUojl3IlUOeXrPGYzC4QM9tpBI9PShj4n49DAwBP4Cc0l3lotP5eM06jWlc7fgHv/wk+T6s7hoAAAAASUVORK5CYII="
								className="arrow_buttom nav-item "
								alt="Profile Img"
							/>
						</ul>
					</div>
					<div className="collapse justify-content-center hidden lg:block" id="navbarNav ">
						<ul className="navbar-nav ">
							<li className="nav-item nav_wallet">
								<div onClick={handleConnect} className="cursor-pointer">
									<FaWallet style={{ color: 'white', fontSize: '30px' }} />
								</div>
							</li>
						</ul>
					</div>
				</div>
				{dropdown && <WalletDropdown />}
			</nav>
		</>
	);
}
