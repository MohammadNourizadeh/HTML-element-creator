const form = document.getElementById('my-form');
const createdElementCol = document.getElementById('created-element-col');
const clearBtn = document.getElementById('clear-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tagName = document.getElementById('tagName');
    const tagColor = document.getElementById('tagColor');
    const tagWidth = document.getElementById('tagWidth');
    const tagHeight = document.getElementById('tagHeight');

    clearBtn.classList.remove('d-none');
    const element = document.createElement(tagName.value);
    element.style.backgroundColor = tagColor.value;
    element.style.width = `${tagWidth.value}px`;
    element.style.height = `${tagHeight.value}px`;
    element.innerText = tagName.value;
    element.classList.add('rounded-5', 'd-flex', 'justify-content-center', 'align-items-center', 'shadow', 'mb-2');

    createdElementCol.appendChild(element);
})


clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    createdElementCol.innerHTML = '';
    clearBtn.classList.add('d-none');
})