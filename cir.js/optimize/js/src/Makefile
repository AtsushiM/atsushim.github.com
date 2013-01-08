SRC = namespace_start.js Ajax.js BtnCreate.js ChkAll.js ChkSrc.js Event.js Element.js Dependency.js MakeSrc.js SrcArea.js main.js namespace_end.js
COMBINE = src.combine.js
COMPRESS = ../main.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --js $(COMBINE) --js_output_file $(COMPRESS)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
#	rm -f $(COMBINE)

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
