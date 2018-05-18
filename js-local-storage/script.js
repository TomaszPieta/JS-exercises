let name = document.forms.form.name.value;
let salary = document.forms.form.salary.value;
let data = document.forms.form.data.value;

save = () => localStorage.setItem( name, salary );
load = () => salary = localStorage.getItem( name );
delete = () => data = localStorage.getItem( name );
show = () => {
  let box = `Found ${localStorage.length} people:\r\n`;
  for (let id in localStorage) {
    box += `${id} localStorage.getItem(id) \r\n`
  }
  alert(box);
}