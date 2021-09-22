const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

let itemSelected = null

for(const item of items) {
  item.addEventListener('dragstart', dragstart)
  item.addEventListener('dragend', dragend)
}

for(const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  itemSelected = event.target
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 300)
}

function dragend() {
  itemSelected.className = 'item'
}

function dragover(event) {
  if (!isTargetPlaceholder(event.target)) {
    return
  }

  event.preventDefault()
}

function dragenter(event) {
  if (!isTargetPlaceholder(event.target)) {
    return
  }

  event.target.classList.add('hovered')
}

function dragleave(event) {
  if (!isTargetPlaceholder(event.target)) {
    return
  }

  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  if (!isTargetPlaceholder(event.target)) {
    return
  }

  event.target.classList.remove('hovered')

  const type = itemSelected.dataset.type.toLowerCase()
  if(!event.target.classList.contains(type)) {
    return
  }

  event.target.append(itemSelected)
}

function isTargetPlaceholder(target) {
  return target.classList.contains('placeholder')
}

function isTargetPlaceholderProgress(target) {
  return target.classList.contains('progress')
}
