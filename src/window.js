/* window.js
 *
 * Copyright 2021 dalitsosakala
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const { GObject, Gtk } = imports.gi;

var MyfirstappWindow = GObject.registerClass({
    GTypeName: 'MyfirstappWindow',
}, class MyfirstappWindow extends Gtk.ApplicationWindow {
    _init(application) {
        super._init({ application, title:'App' });

        let button = new Gtk.Button();
        button.add(new Gtk.Arrow({arrow_type: Gtk.ArrowType.RIGHT, shadow_type: Gtk.ShadowType.NONE}));

        let b_box = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL});
        b_box.add(button);

        let hb = new Gtk.HeaderBar();
        hb.set_show_close_button(true);
        hb.set_title("HeaderBar Example");
        hb.pack_end(b_box)
        this.set_titlebar(hb);

        let lbl=new Gtk.Label({label:"Appy"})
        let box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});
        box.add(lbl)

        this.add(box);
        this.set_default_size(400,300);
        this.show_all()
    }
});

