function getBoilerPlate(times) {
  const p = document.createElement('p');
  const dummy = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, corrupti reprehenderit dolores quas eveniet voluptas eaque magni eius, alias qui velit doloremque placeat quaerat eligendi hic, blanditiis odit rerum voluptatem commodi libero molestias eum. Velit animi temporibus accusantium ipsa cupiditate corporis sapiente, dolores laborum omnis in aut quia quas facilis?';
  p.textContent = dummy.repeat(times);
  document.body.prepend(p);
};

getBoilerPlate(100);

class ScrollBar {
  constructor(where) {
    this.where = where;
    this.instance = document.createElement('div');

    this.instance.innerHTML = '<div class="filled"></div>';
    this.instance.className = 'scroll-bar';

    const scrollHandler = () => {
      const filled = this.instance.firstElementChild;
      const html = document.documentElement;
      const screenSize = html.clientHeight
      const fullHight = html.scrollHeight - screenSize;
      const scrolled = html.scrollTop;
      const width = scrolled * 100 / fullHight;

      filled.style.width = `${width}%`;
    }

    const scrollClickHandler = event => {
      const html = document.documentElement;
      const instWidth = this.instance.clientWidth;
      const eventCoords = event.offsetX;
      const precent = eventCoords * 100 / instWidth;
      const height = (html.scrollHeight - html.clientHeight) * precent / 100;

      html.scrollTop = height;
    } 

    window.addEventListener('scroll', scrollHandler);
    this.instance.addEventListener('click', scrollClickHandler);
  }

  render(){
    document.querySelector(this.where).prepend(this.instance);
  }
}

const scrollBar = new ScrollBar('#root');
scrollBar.render();