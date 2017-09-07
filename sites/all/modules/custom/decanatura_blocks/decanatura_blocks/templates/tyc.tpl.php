<div ng-view="" class="ng-scope">
  <div class="page-content ng-scope">
    <div class="row terminos">
      <div class="space-6"></div>
      <div class="col-sm-10 col-sm-offset-1">
        <div id="login-box" class="login-box visible widget-box no-border">
          <div class="widget-body">
            <p class="title"><?php print variable_get('tyc_title','')?></p>
            <br>
            <?php print variable_get('tyc_body','')?>
          </div><!-- /widget-body -->
        </div><!-- /login-box -->
      </div><!-- /position-relative -->
    </div>
  </div><!-- /.page-content -->
</div>