<script type="text/javascript">
      $(document).ready(function () {
        //change the main background of the div when the color is changed
        $("#color").on("change", function (e) {
          color = $(this).val();
          $("body").css("backgroundColor", color);
        });
      });
    </script>