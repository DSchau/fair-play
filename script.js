// https://www.fairplaylife.com/the-cards

var items

(function(scope) {
  scope.items = Array.from(document.querySelectorAll('[role="listitem"]')).map(el => {
    const grindEl = el.querySelector('.daily-grind-text')
  
    const grind = !grindEl.className.includes('w-condition-invisible')
    const image = el.querySelector('.card-image')?.getAttribute('src')
  
    const [definitonHeading, conceptionHeading, planningHeading, executionHeading, careHeading] = Array.from(el.querySelectorAll('.modal-heading')).map(el =>`## ${el.innerText}`)
    const [definiton, conception, planning, execution, care] = Array.from(el.querySelectorAll('.modal-text')).map((el, index) => {
        if (index === 0) {
            return el.innerText.trim()
        }
        return el.innerText.split(/-/g).join('\n- ').trim()
    })
  
    return {
        title: el.querySelector('.modal-title')?.innerText?.trim(),
        description: el.querySelector('.modal-text')?.innerText?.trim(),
        category: el.querySelector('.filter-category')?.innerText?.trim(),
        image,
        content: [
            grind && `⚠️ ${grindEl.innerText}`,
            ``,
            definitonHeading,
            ``,
            definiton,
            ``,
            conceptionHeading,
            ``,
            conception,
            ``,
            planningHeading,
            ``,
            planning,
            ``,
            executionHeading,
            ``,
            execution,
            ``,
            careHeading,
            ``,
            care
        ].filter(part => typeof part === 'string').join('\n').trim()
    }
  })
})({ items })
