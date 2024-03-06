let department = ['Mech','CS','EEE','ECE','IT'];

department.forEach(name => {
    const option = document.createElement('option');
    option.textContent = name;
    option.value = name;
    document.getElementById('branch').appendChild('option');
});