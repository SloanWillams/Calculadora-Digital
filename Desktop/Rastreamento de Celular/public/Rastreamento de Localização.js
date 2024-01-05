if ("geolocation" in navigator) {
  /* geolocation está disponível */
  navigator.geolocation.getCurrentPosition(function (position) {
    /* posição atual */
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    // Aqui, você pode enviar os dados de localização para um servidor ou fazer qualquer outra ação desejada com essas coordenadas.
  }, function (error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("Usuário negou a solicitação de geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Informações de localização indisponíveis.");
        break;
      case error.TIMEOUT:
        console.error("Tempo de solicitação de geolocalização expirado.");
        break;
      case error.UNKNOWN_ERROR:
        console.error("Erro desconhecido ao obter a localização.");
        break;
    }
  });
} else {
  /* geolocation NÃO está disponível */
  console.error("Geolocalização não é suportada neste navegador.");
}