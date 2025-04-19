class Gyrotic {
  /**
   * The element to be transformed.
   * @type {HTMLElement}
   */
  private element: HTMLElement | null
  /**
   * The options for the component.
   * @type {{}}
   */
  private options: {}
  /**
   * Creates an instance of Gyrotic.
   * @param {string} element - The selector for the element to be transformed.
   * @param {{}} options - The options for the component.
   */
  constructor(element: string, options: {}) {
    this.element = document.querySelector(element)
    if (!this.element) {
      throw new Error(`Element ${element} not found`)
    }
    this.options = options
    this.render()
  }

  /**
   * Renders the component
   * @private
   * @returns {void}
   */
  private render() {
    if (!this.element) {
      throw new Error('Element not found')
    }
    this.element.outerHTML = `
      <div class="gyrotic ABC">
      Hello, Gyrotic!!!
      </div>
    `
  }
}

export default Gyrotic
