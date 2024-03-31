document
	.querySelector('.header__burger')
	.addEventListener('click', function () {
		this.classList.toggle('active')
		document.querySelector('.nav-main_list').classList.toggle('open')
	})

document.addEventListener('DOMContentLoaded', () => {
	const banner = document.querySelector('.banner')
	const header = document.querySelector('.header-section')
	const scrollItems = document.querySelectorAll('.scroll-item')

	const scrollAnimation = () => {
		let windowCenter = window.innerHeight / 2 + window.scrollY
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + el.offsetHeight / 3
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class')
			}
		})
	}

	const headerFixed = () => {
		let scrollTop = window.scrollY
		let headerCenter = banner.offsetHeight / 2

		if (scrollTop >= headerCenter) {
			header.classList.add('fixed')
			header.style.marginTop = `$ {header.offsetHeight}px`
		} else {
			header.classList.remove('fixed')
			header.style.marginTop = `0px`
		}
	}

	headerFixed()
	scrollAnimation()
	window.addEventListener('scroll', () => {
		scrollAnimation()
		headerFixed()
		window.addEventListener('scroll', () => {
			let btnUp = document.querySelector('.up')
			btnUp.classList.toggle('active', window.scrollY >= 1000)
			scrollAnimation()
			btnUp.onclick = function () {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
		}
	})
	})
})
