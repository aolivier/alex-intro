function ready(fn) {
  // replaces $(document).ready() in jQuery
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

window.onload = function () {
  for (var i = 0; i < 12; i++) {
    let star = document.createElement('img')
    let movementFactor = 100 + 100 * Math.random()

    star.setAttribute('src', './assets/star.svg')
    star.className = 'star lax lax_preset_zigzag:' + movementFactor + ':200'

    let size = 1.5 + Math.random() * 1.5 // Size between  viewport units

    star.style.width = size + 'vw'
    star.style.height = size + 'vw'
    star.style.top = Math.random() * 100 + 'vh'
    star.style.left = Math.random() * 100 + 'vw'

    document.body.appendChild(star)
  }

  lax.init()

  const container = document.querySelector('.scroller')

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return container.scrollTop
  })

  const frameWidth = 370
  const frameCount = 120

  lax.addElements('.sprite', {
    scrollY: {
      'background-position': [
        [0, 1e9],
        [0, 1e9],
        {
          cssFn: function (val) {
            const frame = Math.floor(val / 3) % frameCount
            const x = frame * frameWidth

            return `-${x}px 0px`
          },
        },
      ],
    },
  })
}
