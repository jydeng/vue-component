<template>
  <div id="app">
    <div id="content"><router-view></router-view></div>
    <div id="nav">
      <ol>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/form">Form</router-link></li>
        <li><router-link to="/checkbox">CheckBox</router-link></li>
        <li><router-link to="/radio">Radio</router-link></li>
        <li><router-link to="/display">Display</router-link></li>
        <li><router-link to="/alert">Alert</router-link></li>
        <li><router-link to="/table">Table</router-link></li>
        <li><router-link to="/tableSlot">Table-slot</router-link></li>
        <li><router-link to="/heading">Heading</router-link></li>
        <li><router-link to="/messageBox">MessageBox</router-link></li>
        <li><router-link to="/dnd">DnD</router-link></li>
        <li><router-link to="/preview">Preview</router-link></li>
        <li><router-link to="/ckeditor">CKeditor</router-link></li>
        <li><router-link to="/textarea">TextArea</router-link></li>
        <li><router-link to="/datetimepicker">DateTimePiakcer</router-link></li>
        <li>
          <router-link to="/datetimepicker2">DateTimePiakcer2</router-link>
        </li>
        <li><router-link to="/pdf">PDF</router-link></li>
      </ol>
    </div>
  </div>
</template>
<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 14px;
}

#content {
  text-align: center;
}

#nav {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  padding: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 0 3px #ddd;
}

#nav ol {
  padding-left: 20px;
}

#nav ol li {
  margin: 10px 0;
}
</style>
