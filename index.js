setInterval(() => {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((a, i) => {
    a.src =
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1PwdEe.img?w=1280&h=720&m=4&q=90";
  });
}, 500);
