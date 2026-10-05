import { h } from '../../../lib/h.js'
import { Section } from '../../../components/Section/Section.js'
import { Kicker } from '../../../components/Kicker/Kicker.js'
import { Terminal } from '../../../components/Terminal/Terminal.js'
import { Button } from '../../../components/Button/Button.js'
import { cvLink } from '../../../data/site.js'
import './Hero.css'

export function Hero({ kicker, titleLines, lead, terminal, cta }) {
  const [firstLine, secondLine] = titleLines

  return Section({
    class: 'hero',
    labelledBy: 'hero-title',
    children: [
      h(
        'div',
        { class: 'hero__intro' },
        Kicker({ label: kicker }),
        h(
          'h1',
          { class: 'hero__title', id: 'hero-title' },
          firstLine,
          ' ', // keeps the words apart when the <br> is hidden on small screens
          h('br'),
          secondLine,
          h('span', { class: 'hero__cursor', 'aria-hidden': 'true' }, '_'),
        ),
        h('p', { class: 'hero__lead' }, lead),
      ),
      h(
        'div',
        { class: 'hero__console' },
        Terminal(terminal),
        h('div', { class: 'hero__actions' }, Button(cta), Button(cvLink)),
      ),
    ],
  })
}
