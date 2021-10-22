<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Dorayaki</title>
    <link rel="stylesheet" href="./styles/base.css" />
    <link rel="stylesheet" href="./styles/create.css" />
    <script type="module" src="javascript/create.js"></script>
</head>

<body>
    <?php include "./php/components/navbar.php" ?>
    <main class="main-container" style="margin-bottom: 100px;">
        <h2 class="form-title">Penambahan Varian</h2>
        <span id="error-text"></span>
        <div class="form-container">
            <div class="form-container-child">
                <p class="form-label">Nama</p>
                <input type="text" class="form-input form-input-single" id="name" />
            </div>
            <div class="form-container-child">
                <p class="form-label">Gambar</p>
                <input type="file" class="form-input form-input-single" accept="image/jpg, image/png, image/jpeg"
                    id="file" />
            </div>
            <div class="form-container-child">
                <p class="form-label">Deskripsi</p>
                <textarea rows="4" cols="50" class="form-input form-input-area" id="description"></textarea>
            </div>
            <div class="form-container-child">
                <p class="form-label">Harga</p>
                <input type="number" class="form-input form-input-single" min="0" id="price" value="0" />
            </div>
            <div class="form-container-child">
                <p class="form-label">Jumlah Stock</p>
                <input type="number" class="form-input form-input-single" min="0" id="stock" value="0" />
            </div>
            <div class="button" id="create">
                <p class="button-text">Create</p>
            </div>
        </div>
    </main>
</body>

</html>