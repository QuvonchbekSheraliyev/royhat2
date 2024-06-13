const btn = document.getElementById('USERS')
const closebtn = document.getElementById('close')
const modalopen = document.getElementById('modal')
const btnclose = document.getElementById('salom')
const username = document.getElementById('first_name')
const lastname = document.getElementById('last_name')
const company = document.getElementById('company')
const salary = document.getElementById('phone')
const submit = document.getElementById('Submitbtn')
const body = document.getElementById('tbody')
btn.addEventListener('click' , () =>
{
modalopen.classList.toggle('hidden')

})

closebtn.addEventListener('click' , () => {
    modalopen.classList.toggle('hidden')
})

btnclose.addEventListener('click' , () => {
    modalopen.classList.toggle('hidden')
})
submit.addEventListener('click' , () => {
    modalopen.classList.toggle('hidden')
})

submit.addEventListener('click' , () =>{
body.innerHTML += `  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 max-[630px]:text-[10px]  max-[580px]:text-[8px] max-[495px]:text-[5px] max-[421px]:text-[4px]">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                  ${username.value}
                </th>
                <td class="px-6 py-4">
               ${lastname.value}
                </td>
                <td class="px-6 py-4">
                  ${company.value}
                </td>
                <td class="px-6 py-4">
                    ${salary.value}
                </td>
                <td class="px-6 py-4">
                 
                    <a href="#" class=" font-medium text-blue-600 dark:text-blue-500 hover:underline ">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline ml-[40px]">Delete</a>
                  
                </td>
            </tr>`
 username.value = ''
lastname.value = ''
company.value = ''
salary.value = ''

})




