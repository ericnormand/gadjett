(ns gadjett.linear)

(defn highest-below-y [m v]
  (second (last (sort-by first (group-by second (filter (fn [[x y]] (<= y v)) m))))))

(defn lowest-above-y [m v]
  (second (first (sort-by first (group-by second (filter (fn [[x y]] (>= y v)) m))))))

(defn highest-below-x [m v]
  (second (last (sort-by first (group-by first (filter (fn [[x y]] (<= x v)) m))))))

(defn lowest-above-x [m v]
  (second (first (sort-by first (group-by first (filter (fn [[x y]] (>= x v)) m))))))


(defn find-keys-with-values-in [m s]
  (filter (comp s m) (keys m)))

(defn find-keys-with-value [m v]
  (find-keys-with-values-in m #{v}))

(defn linear-y [x x1 y1 x2 y2]
  (+  y1 (/ (* (- y2 y1) (- x x1)) (- x2 x1))))

(defn log-x-linear-y [x x1 y1 x2 y2]
  (+ y1 (/ (* (- y2 y1) (- (Math/log x) (Math/log x1))) (- (Math/log x2) (Math/log x1)))))

(defn linear-y-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] linear-y
    [:log :linear] log-x-linear-y
    linear-y))

(defn interpolate-linear-y [m x 
  & {:keys [interpolate? axes] :or {interpolate? (constantly true) axes {:x :linear :y :linear}}}]
    (or (get m x)
        (let [[x-below y-below] (last (sort (highest-below-x m x)))
              [x-above y-above] (first (sort (lowest-above-x m x)))]
        (when (and x-below x-above (interpolate? x-below x-above))
          ((linear-y-func axes) x x-below y-below x-above y-above)))))

(defn linear-x [y x1 y1 x2 y2]
  (+ x1 (/ (* (- x2 x1) (- y y1)) (- y2 y1))))

(defn linear-x-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] linear-x
    linear-x))

(defn below-and-above-y [y [x1 y1] [x2 y2]]
  (when (or (< y1 y y2) (> y1 y y2)) [[x1 y1] [x2 y2]]))

(defn find-below-and-above-y [m y]
  (as->
    (map vec m) $
    (sort-by first $)
    (map (partial below-and-above-y y) $ (rest $))
    (remove nil? $)))

(defn calc-interpolated-values [m y interpolate? axes]
  (as->
    (fn [[[x-below y-below] [x-above y-above]]]
      (when (and y-below y-above (interpolate? y-below y-above))
        ((linear-x-func axes) y x-below y-below x-above y-above))) $
    (keep $ (find-below-and-above-y m y))))




(defn- min-coll [coll]
  (when-not (empty? coll)
    (apply min coll)))

(defn interpolate-linear-x
  "Returns the interpolated x for a given y acording to the select-func thats passed

- `:interpolate?` -  a predicate for deciding eather to calc th interpolation or not.
-   `:axes` -  a map that defines what are the axes scales
-   `:select-func` - what functionality to use if there are multiple interpolated values

~~~klipse
  (interpolate-linear-x {10 30 20 50 70 60} 32)
~~~
  "
  [m y
  & {:keys [interpolate? axes select-func]
     :or {interpolate? (constantly true) axes {:x :linear :y :linear} select-func min-coll}}]
  (let [values (find-keys-with-value m y)
        interpolated-values (calc-interpolated-values m y interpolate? axes)]
    (select-func (concat values interpolated-values))))

(defn linear-equation [x1 y1 x2 y2]
  (let [a (/ (- y1 y2) (- x1 x2))
        b (- y1 (* a x1))]
    [a b]))

(defn log-x-linear-equation [x1 y1 x2 y2]
  (let [a (/ (- y1 y2) (- (Math/log x1) (Math/log x2)))
        b (- y1 (* a (Math/log x1)))]
    [a b]))

(defn linear-equation-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] linear-equation
    [:log :linear] log-x-linear-equation
    linear-equation))

(defn intersection-point [a1 b1 a2 b2]
  (let [x (/ (- b2 b1) (- a1 a2))
        y (+ ( * a1 x) b1)]
    [x y]))

(defn log-x-intersection-point [a1 b1 a2 b2]
  (let [x (/ (- b2 b1) (- a1 a2))
        y (+ ( * a1 x) b1)]
    [(Math/exp x) y]))

(defn intersection-point-func [{:keys [x y] :as axes}]
  ;Add more options if needed
  (case [x y]
    [:linear :linear] intersection-point
    [:log :linear] log-x-intersection-point
    intersection-point))

(defn intersection-point-from-2-lines-points [[ax1 ay1 ax2 ay2] [bx1 by1 bx2 by2]
  & {:keys [axes] :or {axes {:x :linear :y :linear}}}]
  (let [[a1 b1] ((linear-equation-func axes) ax1 ay1 ax2 ay2)
        [a2 b2] ((linear-equation-func axes) bx1 by1 bx2 by2)
        [x y] ((intersection-point-func axes) a1 b1 a2 b2)]
    [x y]))
