import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { DESCRIPTION_SIZE_LIMIT } from "../../../statics";


const RaffleDescription = ({setValid, init, setValue}) => {
    const changeEditor = (data) => {
        setValue(data);
    }
    setValid(!!init && init.length < DESCRIPTION_SIZE_LIMIT)
    return (
        <div className="first-step step-1-c">
            <div className="step-content text-center text-lg-start">
                <h3 className="step-title mb-4">
                    Write the Raffle's Description. <small>({DESCRIPTION_SIZE_LIMIT} characters)</small>
                </h3>
                <form>
                    <div className="editor-bordered-box">
                        <div>
                            <CKEditor
                                data={init}
                                editor={DecoupledEditor}
                                onReady={editor => {
                                    editor.ui.getEditableElement().parentElement.insertBefore(
                                        editor.ui.view.toolbar.element,
                                        editor.ui.getEditableElement()
                                    );
                                }}
                                onError={({willEditorRestart}) => {
                                    // This is why you need to remove the older toolbar.
                                    if (willEditorRestart) {
                                        this.editor.ui.view.toolbar.element.remove();
                                    }
                                }}
                                config={{
                                    toolbar: {
                                        items: [
                                            'heading',
                                            '|',
                                            'bold',
                                            'italic',
                                            'link',
                                            '|',
                                            'alignment',
                                            'indent',
                                            'outdent',
                                            'numberedList',
                                            'bulletedList',
                                            '|',
                                            'blockQuote',
                                            '|',
                                            'undo',
                                            'redo'
                                        ]
                                    },
                                    // plugins: [Markdown]
                                }}
                                onChange={(event, editor) => {
                                    let data = editor.getData();
                                    changeEditor(data);
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>)
};

export default RaffleDescription;
