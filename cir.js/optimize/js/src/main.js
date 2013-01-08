(function() {
    var arg = {
            observer: new C.Observer(),
            e: new Global.Event(),
            el: new Global.Element(),
            dependency: new Global.Dependency(),
            ajax: new Global.Ajax()
        };

    arg.makeSrc = new Global.MakeSrc(arg);
    arg.btnCreate = new Global.BtnCreate(arg);
    arg.chkAll = new Global.ChkAll(arg);
    arg.srcArea = new Global.SrcArea(arg);

    return arg;
}());
